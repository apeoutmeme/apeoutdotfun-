import React from 'react';
import { Box, Container, Typography, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { GitHub, Launch } from '@mui/icons-material';
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

const ProjectCard = styled(Card)(({ theme }) => ({
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

const GitHubCard = styled(Card)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  marginBottom: theme.spacing(4),
}));

const LaunchpadPage = () => {
  const navigate = useNavigate();

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
          Launchpad
        </Typography>
        <Typography variant="h6" sx={{ mb: 6, opacity: 0.7 }}>
          Discover and contribute to innovative projects in the ApeOut ecosystem
        </Typography>

        <Grid item xs={12}>
          <GitHubCard>
            <CardContent>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 2
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <GitHub sx={{ fontSize: 40, color: '#fbbf24' }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: '#fbbf24' }}>
                      ApeMind Launchpad
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Open-source AI launchpad for Solana
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="outlined"
                    href="https://github.com/apeoutmeme"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHub />}
                    sx={{
                      borderColor: 'rgba(251, 191, 36, 0.5)',
                      color: '#fbbf24',
                      '&:hover': {
                        borderColor: '#fbbf24',
                        background: 'rgba(251, 191, 36, 0.1)',
                      }
                    }}
                  >
                    View Source
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </GitHubCard>
        </Grid>

        <Grid container spacing={4}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <ProjectCard>
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {item === 1 ? 'ApeOut Core' : item === 2 ? 'BNNA Token' : 'Auto-Ape Bot'}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                      {item === 1 
                        ? 'The core trading platform for fast exits from volatile tokens' 
                        : item === 2 
                          ? 'Governance token for the ApeOut ecosystem with staking rewards'
                          : 'Automated trading bot for executing trades based on predefined conditions'}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Status
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#4ade80' }}>
                        {item === 1 ? 'Live' : item === 2 ? 'Active' : 'In Development'}
                      </Typography>
                    </Box>
                    
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={<Launch />}
                      sx={{
                        borderColor: 'rgba(249, 115, 22, 0.5)',
                        color: '#f97316',
                        '&:hover': {
                          borderColor: '#f97316',
                          background: 'rgba(249, 115, 22, 0.1)',
                        }
                      }}
                      onClick={() => {
                        if (item === 1) {
                          navigate('/app');
                        } else if (item === 2) {
                          window.open('https://dexscreener.com/solana/DPZHWt9TSNq6xyqRFJE4jf3aXcbu3fmpUxMW6eaBpump', '_blank');
                        } else {
                          navigate('/app');
                        }
                      }}
                    >
                      {item === 1 ? 'Launch App' : item === 2 ? 'View Chart' : 'Learn More'}
                    </Button>
                  </Box>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Join the Hackathon
          </Typography>
          
          <StyledPaper>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h5" gutterBottom>
                  Build on ApeOut
                </Typography>
                <Typography variant="body1" paragraph>
                  We're looking for talented developers to help expand the ApeOut ecosystem. Join our hackathon and build innovative solutions for crypto traders.
                </Typography>
                <Typography variant="body1">
                  Fork our repository, create your project, and submit it for review. The best projects will be integrated into the ApeOut platform and receive rewards.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  variant="contained"
                  fullWidth
                  href="https://github.com/your-username/apeout"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHub />}
                  sx={{
                    background: 'linear-gradient(45deg, #f97316, #fb923c)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #ea580c, #f97316)',
                    },
                    py: 1.5,
                  }}
                >
                  Start Building
                </Button>
              </Grid>
            </Grid>
          </StyledPaper>
        </Box>
      </Container>
    </Box>
  );
};

export default LaunchpadPage;
