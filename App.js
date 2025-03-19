import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Connection, PublicKey } from '@solana/web3.js';
import logo from './assets/logo.webp';
import logotp from './assets/logo-tp.png';
import { WalletProvider, ConnectionProvider, useWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SolletWalletAdapter } from '@solana/wallet-adapter-sollet';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import { useCallback } from 'react';
import AuthFlow from './components/AuthFlow.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GainsCalculator from './components/features/GainsCalculator.js';
import TokenBurnTracker from './components/reusables/BurnData.js';
import MaintenanceBanner from './components/common/MaintenanceBanner.js';
import LaunchpadPage from './pages/LaunchpadPage.js';
import LandingPage from './pages/LandingPage.js';
import TrendingTokensPage from './pages/TrendingTokensPage.js';
import Roadmap from './pages/Roadmap.js';
import TermsOfUse from './pages/legal/TermsOfUse.js';
import { Box } from '@mui/material';
import { CircularProgress, Typography } from '@mui/material';

// Simple backoff utility for API requests
const backoff = (retryCount) => {
  return Math.min(1000 * Math.pow(2, retryCount), 30000);
};

// Simple request tracking to prevent rate limiting
const requestTracker = {
  requests: new Map(),
  interval: 60000,
  limit: 50,

  canMakeRequest(endpoint) {
    const now = Date.now();
    const reqs = this.requests.get(endpoint) || [];
    const recentReqs = reqs.filter(time => now - time < this.interval);
    this.requests.set(endpoint, recentReqs);
    return recentReqs.length < this.limit;
  },

  trackRequest(endpoint) {
    const reqs = this.requests.get(endpoint) || [];
    reqs.push(Date.now());
    this.requests.set(endpoint, reqs);
  }
};

const App = (props) => {
  // Basic state management
  const [showSettings, setShowSettings] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { publicKey, connected } = useWallet();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [hasBnnaTokens, setHasBnnaTokens] = useState(false);
  const [isWalletRequired, setIsWalletRequired] = useState(true);
  
  // Platform token configuration
  const PLATFORM_TOKENS = [
    'DPZHWt9TSNq6xyqRFJE4jf3aXcbu3fmpUxMW6eaBpump', // BNNA token
  ];
  
  // Toast configuration
  const toastConfig = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      background: 'rgba(23, 32, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      color: 'white',
      fontSize: '14px',
      padding: '16px',
    },
    progressStyle: {
      background: 'linear-gradient(to right, #4CAF50, #81C784)',
    },
  };
  
  // Basic app information
  const [coins, setCoins] = useState([
    { 
      name: 'ApeOut: Swift Exit Strategy for Crypto Traders', 
      description: 'ApeOut is a cutting-edge application designed for crypto traders who need to quickly "ape out" of their token positions, especially in the volatile world of memecoins and pump-and-dump schemes. Built with a focus on the pump.fun ecosystem, ApeOut provides a streamlined interface for rapid selling of tokens to maximize profits or minimize losses.',
      image: logo,
      mint: 'DPZHWt9TSNq6xyqRFJE4jf3aXcbu3fmpUxMW6eaBpump'
    },
  ]);
  
  // Fee configuration - replace with your own values or environment variables
  const DEV_WALLET = process.env.REACT_APP_DEV_WALLET || ''; 
  const FEE_PERCENTAGE = 0.009; // 0.9%
  const SELL_FEE_AMOUNT = 0.0001;
  
  // Check wallet connection
  useEffect(() => {
    const checkExistingAuth = async () => {
      if (!connected || !publicKey) {
        setIsWalletRequired(true);
        setIsAuthenticated(false);
        setHasBnnaTokens(false);
        setIsInitialLoad(false);
        return;
      }
      
      try {
        setIsWalletConnected(true);
        setWallet(publicKey);
        
        // In a real implementation, you would check token balance here
        // For the hackathon version, we'll just set authenticated to true if wallet is connected
        setIsAuthenticated(true);
        setIsWalletRequired(false);
        setHasBnnaTokens(true);
        setIsInitialLoad(false);
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsInitialLoad(false);
      }
    };
    
    checkExistingAuth();
  }, [connected, publicKey]);
  
  // Wallet configuration
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolletWalletAdapter(),
    ],
    []
  );
  
  // Network configuration
  const network = process.env.REACT_APP_SOLANA_NETWORK || 'mainnet-beta';
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  // Loading screen
  if (isInitialLoad) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
        }}
      >
        <img src={logo} alt="ApeOut Logo" style={{ width: 120, marginBottom: 24 }} />
        <CircularProgress sx={{ color: '#f97316', mb: 2 }} />
        <Typography variant="body1" sx={{ color: 'white' }}>
          Loading ApeOut...
        </Typography>
      </Box>
    );
  }
  
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router>
            <ToastContainer {...toastConfig} />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/app" element={
                isAuthenticated ? (
                  <AuthFlow 
                    wallet={wallet}
                    isWalletConnected={isWalletConnected}
                  />
                ) : (
                  <LandingPage />
                )
              } />
              <Route path="/launchpad" element={<LaunchpadPage />} />
              <Route path="/trending" element={<TrendingTokensPage />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/calculator" element={<GainsCalculator />} />
              <Route path="/terms" element={<TermsOfUse />} />
            </Routes>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
