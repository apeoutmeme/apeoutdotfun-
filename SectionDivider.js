import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const DividerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const Line = styled(Box)(({ theme }) => ({
  flex: 1,
  height: '1px',
  background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 100%)',
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const SectionDivider = ({ title, icon }) => {
  return (
    <DividerContainer>
      <Line />
      <TitleContainer>
        {icon}
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 500 }}>
          {title}
        </Typography>
      </TitleContainer>
      <Line />
    </DividerContainer>
  );
};

export default SectionDivider;
