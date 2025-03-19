import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LocalFireDepartment } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const StatBox = styled(Box)(({ theme }) => ({
  background: 'rgba(249, 115, 22, 0.1)',
  borderRadius: '12px',
  padding: theme.spacing(2),
  border: '1px solid rgba(249, 115, 22, 0.3)',
  height: '100%',
}));

const TokenBurnTracker = () => {
  // In a real app, this would be fetched from an API
  const burnData = {
    totalBurned: 42000000,
    burnedLast24h: 1250000,
    burnedLast7d: 8750000,
    burnRate: 0.5, // 0.5% per day
    circulatingSupply: 8400000000,
    totalSupply: 10000000000,
  };

  return (
    <StyledPaper>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <LocalFireDepartment sx={{ fontSize: 32, color: '#f97316' }} />
        <Typography variant="h5">
          BNNA Token Burn Tracker
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatBox>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Total BNNA Burned
            </Typography>
            <Typography variant="h5" sx={{ color: '#f97316' }}>
              {burnData.totalBurned.toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {((burnData.totalBurned / burnData.totalSupply) * 100).toFixed(2)}% of total supply
            </Typography>
          </StatBox>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <StatBox>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Burned Last 24h
            </Typography>
            <Typography variant="h5" sx={{ color: '#f97316' }}>
              {burnData.burnedLast24h.toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {burnData.burnRate}% daily burn rate
            </Typography>
          </StatBox>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <StatBox>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Circulating Supply
            </Typography>
            <Typography variant="h5">
              {burnData.circulatingSupply.toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {((burnData.circulatingSupply / burnData.totalSupply) * 100).toFixed(2)}% of total supply
            </Typography>
          </StatBox>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default TokenBurnTracker;
