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
