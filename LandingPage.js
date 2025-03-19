import React from 'react';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import logo from '../assets/logo.webp';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
  color: 'white',
  padding: theme.spacing(4),
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #f97316, #fb923c)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(249, 115, 22, 0.3)',
  },
}));

const NavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 4),
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
}));

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #000000, #1a1a1a)', minHeight: '100vh' }}>
      <NavBar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={logo} alt="ApeOut Logo" style={{ width: 40, height: 40 }} />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            ApeOut
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="text" 
            sx={{ color: 'white' }}
            onClick={() => navigate('/roadmap')}
          >
            Roadmap
          </Button>
          <Button 
            variant="text" 
            sx={{ color: 'white' }}
            onClick={() => navigate('/launchpad')}
          >
            Launchpad
          </Button>
          <WalletMultiButton />
        </Box>
      </NavBar>

      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <GradientText variant="h2" component="h1" gutterBottom>
                  ApeOut
                </GradientText>
                <Typography variant="h4" gutterBottom>
                  Swift Exit Strategy for Crypto Traders
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
                  ApeOut is a cutting-edge application designed for crypto traders who need to quickly "ape out" of their token positions, especially in the volatile world of memecoins and pump-and-dump schemes.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    onClick={() => navigate('/app')}
                    sx={{
                      background: 'linear-gradient(45deg, #f97316, #fb923c)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ea580c, #f97316)',
                      },
                    }}
                  >
                    Launch App
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    onClick={() => window.open('https://github.com/your-username/apeout', '_blank')}
                    sx={{
                      borderColor: '#f97316',
                      color: '#f97316',
                      '&:hover': {
                        borderColor: '#ea580c',
                        background: 'rgba(249, 115, 22, 0.1)',
                      },
                    }}
                  >
                    GitHub
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="https://github.com/apeoutmeme/resources/blob/25d45eafb420c43e12415d24d88abd4939b17f90/assets/dec27/trending-tokens.png?raw=true"
                alt="Trading Dashboard"
                sx={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0, 0
                                      width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 12 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 6 }}>
              Key Features
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <FeatureCard>
                  <Box sx={{ mb: 2, color: '#f97316' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Fast Trading
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Execute trades quickly on the Solana blockchain with minimal slippage and low fees.
                  </Typography>
                </FeatureCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <FeatureCard>
                  <Box sx={{ mb: 2, color: '#f97316' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    AI-Powered Trading
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Leverage AI algorithms to identify optimal entry and exit points for your trades.
                  </Typography>
                </FeatureCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <FeatureCard>
                  <Box sx={{ mb: 2, color: '#f97316' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Auto-Ape
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Set up automated trading strategies to execute trades based on predefined conditions.
                  </Typography>
                </FeatureCard>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </HeroSection>

      <Box sx={{ background: '#0f0f0f', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2023 ApeOut. All rights reserved. | <Button variant="text" size="small" sx={{ color: 'rgba(255, 255, 255, 0.6)' }} onClick={() => navigate('/terms')}>Terms of Use</Button>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
                    
