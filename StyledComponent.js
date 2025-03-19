import { styled } from '@mui/material/styles';
import { Box, Button, Paper } from '@mui/material';

export const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
  },
}));

export const GlowingButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #f97316, #fb923c)',
  color: 'white',
  padding: theme.spacing(1, 3),
  borderRadius: '8px',
  fontWeight: 'bold',
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: 'linear-gradient(45deg, #ea580c
        '&:hover': {
    background: 'linear-gradient(45deg, #ea580c, #f97316)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    right: '-50%',
    bottom: '-50%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover::after': {
    opacity: 1,
  },
}));

export const GlassPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

export const GradientBorder = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '1px',
  borderRadius: '16px',
  background: 'linear-gradient(45deg, #f97316, #fb923c)',
  '& > *': {
    borderRadius: '15px',
  },
}));

export const AnimatedBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
    transform: 'translate(-50%, -50%)',
    animation: 'pulse 15s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'translate(-50%, -50%) scale(1)',
    },
    '50%': {
      transform: 'translate(-50%, -50%) scale(1.2)',
    },
    '100%': {
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
}));
