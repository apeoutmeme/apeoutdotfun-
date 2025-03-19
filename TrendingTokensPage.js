import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Grid, Card, CardContent, Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { TrendingUp, Launch } from '@mui/icons-material';
import logo from '../assets/logo.webp';

const NavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 4),
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(10px)',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const TokenCard = styled(Card)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(249, 115, 22, 0.3)',
  },
}));

const TrendingTokensPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setTokens([
        {
          name: 'BNNA',
          symbol: 'BNNA',
          price: 0.00023,
          change24h: 15.4,
          volume24h: 45000,
          marketCap: 230000,
          address: 'DPZHWt9TSNq6xyqRFJE4jf3aXcbu3fmpUxMW6eaBpump'
        },
        {
          name: 'Solana',
          symbol: 'SOL',
          price: 142.78,
          change24h: 3.2,
          volume24h: 1200000000,
          marketCap: 62000000000,
          address: 'So11111111111111111111111111111111111111112'
        },
        {
          name: 'Bonk',
          symbol: 'BONK',
          price: 0.00002,
          change24h: -2.1,
          volume24h: 25000000,
          marketCap: 1200000000,
          address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
        },
        {
          name: 'Dogwifhat',
          symbol: 'WIF',
          price: 2.34,
          change24h: 5.7,
          volume24h: 85000000,
          marketCap: 2340000000,
          address: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65QAuK'
        },
        {
          name: 'Jito',
          symbol: 'JTO',
          price: 3.12,
          change24h: -1.3,
          volume24h: 42000000,
          marketCap: 360000000,
          address: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn'
        },
        {
          name: 'Render Token',
          symbol: 'RNDR',
          price: 7.85,
          change24h: 2.8,
          volume24h: 120000000,
          marketCap: 3100000000,
          address: 'rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof'
        }
      ]);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
      color: 'white',
    }}>
      <NavBar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src={logo} alt="ApeOut Logo" style={{ width: 40, height: 40 }} />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            ApeOut
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="text" 
            sx={{ color: 'white' }}
            onClick={() => navigate('/')}
          >
            Home
          </Button>
          <Button 
            variant="text" 
            sx={{ color: 'white' }}
            onClick={() => navigate('/roadmap')}
          >
            Roadmap
          </Button>
          <WalletMultiButton />
        </Box>
      </NavBar>

      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
          Trending Tokens
        </Typography>
        <Typography variant="h6" sx={{ mb: 6, opacity: 0.7 }}>
          Discover the hottest tokens on Solana
        </Typography>

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
            <CircularProgress sx={{ color: '#f97316' }} />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {tokens.map((token, index) => (
              <Grid item xs={12} md={4} key={index}>
                <TokenCard>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6">
                        {token.name} ({token.symbol})
                      </Typography>
                      <Box 
                        sx={{ 
                          px: 1.5, 
                          py: 0.5, 
                          borderRadius: '16px', 
                          background: token.change24h >= 0 ? 'rgba(74, 222, 128, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                          color: token.change24h >= 0 ? '#4ade80' : '#ef4444',
                          fontSize: '0.875rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                      </Box>
                    </Box>
                    
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      ${token.price.toLocaleString(undefined, { minimumFractionDigits: token.price < 0.01 ? 5 : 2, maximumFractionDigits: token.price < 0.01 ? 5 : 2 })}
                    </Typography>
                    
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          24h Volume
                        </Typography>
                        <Typography variant="body1">
                          ${(token.volume24h).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          Market Cap
                        </Typography>
                        <Typography variant="body1">
                          ${(token.marketCap).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </Typography>
                      </Grid>
                    </Grid>
                    
                    <Button
                      variant="outlined"
                      size="small"
                      fullWidth
                      endIcon={<Launch />}
                      sx={{
                        borderColor: 'rgba(249, 115, 22, 0.5)',
                        color: '#f97316',
                        '&:hover': {
                          borderColor: '#f97316',
                          background: 'rgba(249, 115, 22, 0.1)',
                        }
                      }}
                      onClick={() => window.open(`https://solscan.io/token/${token.address}`, '_blank')}
                    >
                      View on Solscan
                    </Button>
                  </CardContent>
                </TokenCard>
              </Grid>
            ))}
          </Grid>
        )}
        
        <Box sx={{ mt: 8 }}>
          <StyledPaper>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h5" gutterBottom>
                  Want to trade these tokens?
                </Typography>
                <Typography variant="body1">
                  Connect your wallet and start trading with ApeOut's fast and efficient trading platform.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/app')}
                  startIcon={<TrendingUp />}
                  sx={{
                    background: 'linear-gradient(45deg, #f97316, #fb923c)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #ea580c, #f97316)',
                    },
                    py: 1.5,
                  }}
                >
                  Launch Trading App
                </Button>
              </Grid>
            </Grid>
          </StyledPaper>
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingTokensPage;
