import React, { useState } from 'react';
import { Box, Grid, Paper, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import photo12 from '../image/2photo.svg';
import photo31 from '../image/Csjd.jpeg';
import photo32 from '../image/3photo.jpeg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
              }}
            >
              <IconButton onClick={handlePrevSlide}>
                <ChevronLeftIcon />
              </IconButton>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                <Box
                  sx={{
                    flex: '0 0 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'warning.main',
                  }}
                >
                  <Box sx={{ flexGrow: 1, backgroundImage: 'url(photo12)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <Box sx={{ p: 2, display: 'flex' }} >
                    <img src={photo12} alt='' style={{ height: '400px', marginLeft: '250px' }}></img>
                    <p style={{ marginLeft: '60px',fontSize: '50px' }}>From students to senior citizens<br />
                      this web portal of<br />
                      "Products and Classifieds”<br />
                      provides it all</p>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: '0 0 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'success.main',
                  }}
                >
                  <Box sx={{ flexGrow: 1, backgroundImage: 'url(photo2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <Box sx={{ p: 2, display: 'flex' }}>
                    <img src={photo31} alt='' style={{ height: '400px', marginLeft: '250px' }}></img>
                    <p style={{ marginLeft: '60px', fontSize: '50px'}}>From students to senior citizens<br />
                      this web portal of<br />
                      "Products and Classifieds”<br />
                      provides it all</p>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: '0 0 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'grey.300',
                  }}
                >
                  <Box sx={{ flexGrow: 1, backgroundImage: 'url(photo3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <Box sx={{ p: 2, display: 'flex' }}>
                    <img src={photo31} alt='' style={{ height: '400px', marginLeft: '250px' }}></img>
                    <p style={{ marginLeft: '60px', fontSize: '50px' }}>From students to senior citizens<br />
                      this web portal of<br />
                      "Products and Classifieds”<br />
                      provides it all</p>
                  </Box>
                </Box>
              </Box>
              <IconButton onClick={handleNextSlide}>
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Carousel;
