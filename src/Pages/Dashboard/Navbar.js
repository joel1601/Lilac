import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, InputBase, MenuItem, Menu, Avatar, Container, Select, Button, Grid } from '@mui/material';
import { Search, ShoppingCart, Favorite } from '@mui/icons-material';
import photo from '../image/logoipsum-297.svg';
import { Link } from '@mui/material';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#fff' }}>
        <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Toolbar>
            <img src={photo} alt="Logo" style={{ marginRight: '16px', height: '40px' }} />
            <Select value="EN">
              <MenuItem value="EN">English</MenuItem>
              <MenuItem value="FR">French</MenuItem>
              <MenuItem value="DE">German</MenuItem>
            </Select>
            <div style={{ width: '40%', borderRadius: '8px', backgroundColor: '#ccc', display: 'flex', alignItems: 'center', paddingLeft: '8px', marginRight: '30px', marginLeft: '30px' }}>
              <Search style={{ marginRight: '8px' }} />
              <InputBase placeholder="Search" fullWidth />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
              <IconButton style={{ marginRight: '50px' }}>
                <Badge badgeContent={5} color="error">
                  <Favorite />
                </Badge>
              </IconButton>
              <IconButton style={{ marginRight: '50px' }}>
                <Badge badgeContent={2} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <Avatar alt="User Avatar" src="/path/to/avatar.jpg" style={{ marginLeft: '15px', borderRadius: '20px' }} />
              <Button variant="contained" color="primary" style={{ marginLeft: '20px', width: '100%' }}>
              Classifieds
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ display: 'flex', gap: '50px' }}>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>All Programs</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>Books</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>Electronics</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>real estate</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>Cars-bikes</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}> Dorm-furniture</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}> Men</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>Women</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}> Music</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>hobbies Games</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>toys</Link>
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>Kids</Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Navbar;
