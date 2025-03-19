import React, { useState } from 'react';
import { Box, Container, Typography, Paper, TextField, Button, Grid, Slider, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import logo from '../../assets/logo.webp';

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

const ResultCard = styled(Box)(({ theme }) => ({
  background: 'rgba(249, 115, 22, 0.1)',
  borderRadius: '12px',
  padding: theme.spacing(3),
  border: '1px solid rgba(249, 115, 22, 0.3)',
  marginTop: theme.spacing(4),
}));

const GainsCalculator = () => {
  const navigate = useNavigate();
  const [investment, setInvestment] = useState(100);
  const [initialPrice, setInitialPrice] = useState(0.0001);
  const [targetPrice, setTargetPrice] = useState(0.001);
  const [showResults, setShowResults] = useState(false);
  
  const handleCalculate = () => {
    setShowResults(true);
  };
  
  const tokenAmount = investment / initialPrice;
  const finalValue = tokenAmount * targetPrice;
  const profit = finalValue - investment;
  const roi = (profit / investment) * 100;

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
          Gains Calculator
        </Typography>
        <Typography variant="h6" sx={{ mb: 6, opacity: 0.7 }}>
          Calculate potential profits from your crypto investments
        </Typography>

        <StyledPaper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Investment Details
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom>
                  Investment Amount (SOL)
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">◎</InputAdornment>,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#f97316',
                      },
                      color: 'white',
                    },
                  }}
                />
                <Slider
                  value={investment}
                  onChange={(e, newValue) => setInvestment(newValue)}
                  min={0.1}
                  max={1000}
                  step={0.1}
                  sx={{
                    color: '#f97316',
                    '& .MuiSlider-thumb': {
                      '&:hover, &.Mui-active': {
                        boxShadow: '0 0 0 8px rgba(249, 115, 22, 0.16)',
                      },
                    },
                  }}
                />
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom>
                  Initial Token Price (SOL)
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="number"
                  value={initialPrice}
                  onChange={(e) => setInitialPrice(parseFloat(e.target.value) || 0)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">◎</InputAdornment>,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#f97316',
                      },
                      color: 'white',
                    },
                  }}
                />
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom>
                  Target Token Price (SOL)
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="number"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(parseFloat(e.target.value) || 0)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">◎</InputAdornment>,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#f97316',
                      },
                      color: 'white',
                    },
                  }}
                />
              </Box>
              
              <Button
                variant="contained"
                fullWidth
                onClick={handleCalculate}
                sx={{
                  background: 'linear-gradient(45deg, #f97316, #fb923c)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #ea580c, #f97316)',
                  },
                  py: 1.5,
                }}
              >
                Calculate Potential Gains
              </Button>
            </Grid>
            
            <Grid item xs={12} md={6}>
              {showResults && (
                <ResultCard>
                  <Typography variant="h6" sx={{ mb: 3, color: '#f97316' }}>
                    Calculation Results
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Token Amount:
                      </Typography>
                      <Typography variant="h6">
                        {tokenAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Initial Investment:
                      </Typography>
                      <Typography variant="h6">
                        ◎ {investment.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Final Value:
                      </Typography>
                      <Typography variant="h6">
                        ◎ {finalValue.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Profit:
                      </Typography>
                      <Typography variant="h6" sx={{ color: profit > 0 ? '#4ade80' : '#ef4444' }}>
                        ◎ {profit.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                                      {!showResults && (
                <Box sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  opacity: 0.7
                }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Enter your investment details
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    Calculate potential returns based on token price changes.
                    This calculator helps you visualize possible outcomes for your investments.
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </StyledPaper>
        
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            How to Use the Calculator
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <StyledPaper sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ color: '#f97316', mb: 2 }}>
                  1. Enter Investment
                </Typography>
                <Typography variant="body2">
                  Input the amount of SOL you plan to invest in the token.
                </Typography>
              </StyledPaper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <StyledPaper sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ color: '#f97316', mb: 2 }}>
                  2. Set Token Prices
                </Typography>
                <Typography variant="body2">
                  Enter the initial token price and your target price goal.
                </Typography>
              </StyledPaper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <StyledPaper sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ color: '#f97316', mb: 2 }}>
                  3. View Results
                </Typography>
                <Typography variant="body2">
                  See your potential profit, ROI, and final investment value.
                </Typography>
              </StyledPaper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default GainsCalculator;
