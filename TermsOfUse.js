import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
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

const TermsOfUse = () => {
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
        </Box>
      </NavBar>

      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ mb: 6, fontWeight: 'bold' }}>
          Terms of Use
        </Typography>

        <StyledPaper>
          <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
            <Typography paragraph>
              Welcome to ApeOut! By accessing or using our platform, you agree to the following terms and conditions.
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              General Use
            </Typography>
            <Typography paragraph>
              ApeOut is an automated platform for exploring and trading newly minted memecoins. By using the platform, you acknowledge and accept the risks associated with trading in volatile markets.
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              User Responsibilities
            </Typography>
            <Typography paragraph>
              Users are responsible for the security of their accounts and connected wallets. ApeOut will never store or ask for private keys. Use at your own risk.
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              Fees and Services
            </Typography>
            <Typography paragraph>
              Our platform charges fees for automated trades and premium features. Fee structures are disclosed during the use of respective services. Ensure you understand the costs before proceeding.
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              Liability
            </Typography>
            <Typography paragraph>
              ApeOut is not responsible for losses incurred due to market volatility, platform downtime, or misuse of the platform. We provide tools to assist users but do not guarantee profits or outcomes.
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              Compliance
            </Typography>
            <Typography paragraph>
              Users are responsible for ensuring their use of ApeOut complies with all applicable laws and regulations in their jurisdiction. ApeOut is not responsible for any legal consequences resulting from your use of the platform.
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              Intellectual Property
            </Typography>
            <Typography paragraph>
              All content on ApeOut, including but not limited to text, graphics, logos, and software, is the property of ApeOut and is protected by intellectual property laws.
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              Modifications
            </Typography>
            <Typography paragraph>
              ApeOut reserves the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms.
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              Contact
            </Typography>
            <Typography paragraph>
              For questions or concerns regarding these terms, please contact us at support@apeout.fun.
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
};

export default TermsOfUse;
