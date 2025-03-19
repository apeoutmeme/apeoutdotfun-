import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  Stack,
  IconButton,
  Tooltip,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ContentCopy, Launch, Receipt, Wallet, TrendingUp } from '@mui/icons-material';
import { toast } from 'react-toastify';
import SectionDivider from './common/SectionDivider';

const themeConfigs = {
  default: {
    primary: '#3b82f6',
    secondary: '#2563eb',
    gradient: 'linear-gradient(45deg, #3b82f6, #2563eb)',
    borderAccent: 'rgba(59, 130, 246, 0.3)'
  },
  doge: {
    primary: '#ff9a00',
    secondary: '#ff5e03',
    gradient: 'linear-gradient(45deg, #ff9a00, #ff5e03)',
    borderAccent: 'rgba(255, 154, 0, 0.3)'
  },
  pepe: {
    primary: '#00ff87',
    secondary: '#60efff',
    gradient: 'linear-gradient(45deg, #00ff87, #60efff)',
    borderAccent: 'rgba(0, 255, 135, 0.3)'
  }
};

const BNNA_TOKEN_MINT = "DPZHWt9TSNq6xyqRFJE4jf3aXcbu3fmpUxMW6eaBpump";

const StyledPaper = styled(Paper)(({ theme, themeName = 'default' }) => ({
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  color: '#fff',
  border: `1px solid ${themeConfigs[themeName].borderAccent}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${themeConfigs[themeName].primary}40, transparent)`,
  },
}));

const TransferCard = styled(Box)(({ theme, themeName = 'default' }) => ({
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  border: `1px solid ${themeConfigs[themeName].borderAccent}`,
  marginBottom: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${themeConfigs[themeName].primary}40, transparent)`,
  },
}));

const ActionTile = styled(Box)(({ theme, themeName = 'default' }) => ({
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  border: `1px solid ${themeConfigs[themeName].borderAccent}`,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 10px 20px -10px ${themeConfigs[themeName].primary}80`,
    border: `1px solid ${themeConfigs[themeName].primary}`,
  },
}));

const AuthFlow = ({ 
  wallet,
  isWalletConnected
}) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [showDemoModal, setShowDemoModal] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
        color: 'white',
        padding: 3,
      }}
    >
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            ApeOut Dashboard
          </Typography>
          <WalletMultiButton />
        </Box>

        {isWalletConnected ? (
          <>
            <TransferCard themeName={currentTheme}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Your Wallet
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
                  {wallet?.toString().slice(0, 6)}...{wallet?.toString().slice(-4)}
                </Typography>
                <Tooltip title="Copy address">
                  <IconButton 
                    size="small" 
                    onClick={() => copyToClipboard(wallet?.toString())}
                    sx={{ color: themeConfigs[currentTheme].primary }}
                  >
                    <ContentCopy fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="View on Solscan">
                  <IconButton 
                    size="small"
                    onClick={() => window.open(`https://solscan.io/account/${wallet?.toString()}`, '_blank')}
                    sx={{ color: themeConfigs[currentTheme].primary }}
                  >
                    <Launch fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </TransferCard>

            <Box sx={{ mt: 4 }}>
              <SectionDivider 
                title="Resources & Tools" 
                icon={<Launch sx={{ color: '#60a5fa' }} />} 
              />
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 2,
                mt: 2
              }}>
                <ActionTile
                  themeName={currentTheme}
                  onClick={() => window.open('https://t.me/apeoutofficialbot', '_blank')}
                >
                  <img src="https://pbs.twimg.com/profile_images/1867966329254199296/1hUYs3ad_400x400.jpg" alt="" width="40" height="40" />
                  <Typography variant="h6" sx={{ color: '#fff' }}>Trading Bot</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center' }}>
                    Access automated trading features
                  </Typography>
                </ActionTile>

                <ActionTile
                  themeName={currentTheme}
                  onClick={() => setShowDemoModal(true)}
                >
                  <Launch sx={{ fontSize: 40, color: themeConfigs[currentTheme].primary }} />
                  <Typography variant="h6" sx={{ color: '#fff' }}>Auto-Ape Tool</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center' }}>
                    Configure automated trading
                  </Typography>
                </ActionTile>
                
                <ActionTile
                  themeName={currentTheme}
                  onClick={() => window.open('https://dexscreener.com/solana/DPZHWt9TSNq6xyqRFJE4jf3aXcbu3fmpUxMW6eaBpump', '_blank')}
                >
                  <TrendingUp sx={{ fontSize: 40, color: themeConfigs[currentTheme].primary }} />
                  <Typography variant="h6" sx={{ color: '#fff' }}>BNNA Chart</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center' }}>
                    View BNNA token chart
                  </Typography>
                </ActionTile>
              </Box>
            </Box>
          </>
        ) : (
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Connect your wallet to access the ApeOut dashboard
            </Typography>
            <WalletMultiButton />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AuthFlow;
