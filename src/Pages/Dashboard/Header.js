import React from 'react';
import { Phone, Mail, LocationOn } from '@mui/icons-material';
import { Select, MenuItem, Container } from '@mui/material';

const Header = () => {
  return (
    <div style={{ background: '#2196f3' }}>
      <Container maxWidth="lg">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Phone />
            <span>Phone Number</span>
            <Mail />
            <span>Email Address</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LocationOn />
              <span>Location</span>
            </div>
            <Select value="USD">
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </Select>
            <Select value="EN">
              <MenuItem value="EN">English</MenuItem>
              <MenuItem value="FR">French</MenuItem>
              <MenuItem value="DE">German</MenuItem>
            </Select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
