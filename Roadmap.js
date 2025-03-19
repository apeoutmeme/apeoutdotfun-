import React from 'react';
import { Box, Container, Typography, Paper, Stepper, Step, StepLabel, StepContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
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

const StyledStepper = styled(Stepper)(({ theme }) => ({
  '.MuiStepLabel-label': {
    color: 'white',
  },
  '.MuiStepLabel-iconContainer': {
    color: '#f97316',
  },
  '.MuiStepContent-root': {
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    marginLeft: '12px',
  },
}));

const StatusChip = styled(Box)(({ status, theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(0.5, 1.5),
  borderRadius: '16px',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  marginLeft: theme.spacing(1),
  background: status === 'Completed' 
    ? 'rgba(46, 204, 113, 0.2)' 
    : status === 'In Progress' 
      ? 'rgba(241, 196, 15, 0.2)' 
      : 'rgba(149, 165, 166, 0.2)',
  color: status === 'Completed' 
    ? '#2ecc71' 
    : status === 'In Progress' 
      ? '#f1c40f' 
      : '#95a5a6',
  border: `1px solid ${
    status === 'Completed' 
      ? '#2ecc71' 
      : status === 'In Progress' 
        ? '#f1c40f' 
        : '#95a5a6'
  }`,
}));

const Roadmap = () => {
  const navigate = useNavigate();
  
  const roadmapData = [
    {
      phase: 1,
      title: "Launch & Foundation",
      description: "Establishing the core platform and initial features",
      isActive: true,
      items: [
        {
          title: "Platform Launch",
          description: "Initial release of the ApeOut platform",
          status: "Completed"
        },
        {
          title: "Wallet Integration",
          description: "Support for Phantom, Solflare, and Sollet wallets",
          status: "Completed"
        },
        {
          title: "Basic Trading Features",
          description: "Implementation of core trading functionality",
          status: "Completed"
        },
        {
          title: "Community Building",
          description: "Establishing social media presence and community channels",
          status: "Completed"
        }
      ]
    },
    {
      phase: 2,
      title: "Growth & Development",
      description: "Expanding features and improving user experience",
      isActive: true,
      items: [
        {
          title: "Advanced Trading Features",
          description: "Implement advanced trading capabilities and tools",
          status: "In Progress"
        },
        {
          title: "Mobile App Development",
          description: "Begin development of mobile applications",
          status: "In Progress"
        },
        {
          title: "Partnership Expansion",
          description: "Form strategic partnerships in the industry",
          status: "Pending"
        },
        {
          title: "Marketplace",
          description: "Launch the BNNA Marketplace",
          status: "Pending"
        },
        {
          title: "AIAgents",
          description: "Launch the BNNA AIAgents",
          status: "In Progress"
        }
      ]
    },
    {
      phase: 3,
      title: "Expansion & Innovation",
      description: "Introducing new technologies and expanding to new markets",
      isActive: false,
      items: [
        {
          title: "Cross-Chain Support",
          description: "Expand to additional blockchains beyond Solana",
          status: "Planned"
        },
        {
          title: "Advanced AI Integration",
          description: "Deeper AI integration for predictive analytics",
          status: "Planned"
        },
        {
          title: "Institutional Features",
          description: "Tools and features for institutional traders",
          status: "Planned"
        }
      ]
    }
  ];

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
            onClick={() => navigate('/launchpad')}
          >
            Launchpad
          </Button>
          <WalletMultiButton />
        </Box>
      </NavBar>

      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
          Roadmap
        </Typography>
        <Typography variant="h6" sx={{ mb: 6, opacity: 0.7 }}>
          Our vision and development plan for ApeOut
        </Typography>

        <StyledPaper>
          {roadmapData.map((phase) => (
            <Box key={phase.phase} sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 1, color: '#f97316' }}>
                Phase {phase.phase}: {phase.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.8 }}>
                {phase.description}
              </Typography>

              <StyledStepper orientation="vertical">
                {phase.items.map((item, index) => (
                  <Step key={index} active={true}>
                    <StepLabel>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6">{item.title}</Typography>
                        <StatusChip status={item.status}>{item.status}</StatusChip>
                      </Box>
                    </StepLabel>
                    <StepContent>
                      <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                        {item.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </StyledStepper>
            </Box>
          ))}
        </StyledPaper>
      </Container>
    </Box>
  );
};

export default Roadmap;
