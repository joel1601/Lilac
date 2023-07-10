import React from 'react';
import { Grid, Typography, Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { Facebook, YouTube, LinkedIn, Instagram, Twitter, Headset, GetApp } from '@mui/icons-material';
import photo from '../image/logoipsum-297.svg'

const Footer = () => {
  return (
    <footer>
      <Grid container justifyContent="space-between" sx={{ p: 4 }}>
        <Grid item xs={12} sm={4}>
          <img src={photo} alt="Company Logo" style={{ width: '50%' }} />
          <Typography variant="body2" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <div sx={{ mt: 2 }}>
            <a href="#"><Facebook /></a>
            <a href="#"><YouTube /></a>
            <a href="#"><LinkedIn /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter /></a>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Table sx={{ border: 'none',color: 'black', textDecoration: 'none' }}>
            <TableBody>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }}><p>QUICK LINKS</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">CUSTOMER AREA</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Vendor AREA</p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Product</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">My Account Privacy Policy</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Partner with us</p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Classifieds</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Orders</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Procedures</p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Contact us</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Tracking List</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Terms</p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Login</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Terms</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Privacy Policy</p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#"></p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">Return policy</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#"></p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#"></p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#">My Cart</p></TableCell>
                <TableCell sx={{ borderBottom: 'none' }}><p href="#"></p></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2">Contact Us</Typography>
          <Typography variant="body2">123 Street, City, State, ZIP</Typography>
          <Typography variant="body2">Phone: (123) 456-7890</Typography>
          <Button variant="contained" startIcon={<Headset />} sx={{ mt: 2 }} fullWidth>
            Chat Now
          </Button>
          <Button variant="contained" startIcon={<GetApp />} sx={{ mt: 2 }} fullWidth>
            Download App for iPhone
          </Button>
          <Button variant="contained" startIcon={<GetApp />} sx={{ mt: 2 }} fullWidth>
            Download App for Android
          </Button>
        </Grid>
      </Grid>
      <div style={{ backgroundColor: 'black', padding: '16px' }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12}>
            <Typography variant="body2" color="white">
              &copy; 2023 Your Website. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
