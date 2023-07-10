import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import photo from '../image/1.jpeg';
import photo2 from '../image/2.jpeg';
import photo3 from '../image/3.jpeg';
import photo4 from '../image/4.jpeg';
import photo5 from '../image/5.jpeg';
import photo6 from '../image/6.jpeg';
import photo7 from '../image/7.jpeg';
import photo8 from '../image/8.jpeg';
import photo9 from '../image/9.jpeg';

const CardRow = () => {
  const cardImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <Box sx={{ mx: -2 }}>
      <div sx={{display: 'flex'}}>
      <h2 style={{textAlign:'left', marginLeft: "50px", marginTop: '30px'}}>Best Deals</h2>
      <h3 style={{textAlign:'right',marginRight: "50px"}}><a href='#'>View all</a></h3>
      </div>
       <Grid container spacing={2} sx={{ mx: 5, }}>
        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1 }}>
            <Card>
              <CardContent>
                <img src={photo} alt="Left Image 1" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                Super Boost Headphones
                </Typography>
                <Typography variant="body1">$100</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1 }}>
            <Card>
              <CardContent>
                <img src={photo2} alt="Left Image 2" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                Xbox White Joystick
                </Typography>
                <Typography variant="body1">$200</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1 }}>
            <Card>
              <CardContent>
                <img src={photo3} alt="Left Image 3" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                X-Ray 2 Square PACK
                </Typography>
                <Typography variant="body1">$300</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1 }}>
            <Card>
              <CardContent>
                <img src={photo4} alt="Left Image 4" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                AX1326 Automatic Analog
                </Typography>
                <Typography variant="body1">$400</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1 }}>
            <Card>
              <CardContent>
                <img src={photo5} alt="Left Image 5" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                Hazor Mouse Gaming
                </Typography>
                <Typography variant="body1">$500</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mx: 5, mt: 5 }}>
        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1, mt:5 }}>
            <Card>
              <CardContent>
                <img src={photo6} alt="Left Image 1" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                Ice White Airpods
                </Typography>
                <Typography variant="body1">$100</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1,mt:5  }}>
            <Card>
              <CardContent>
                <img src={photo7} alt="Left Image 2" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                Levi's Men's Printed T-Shirt
                </Typography>
                <Typography variant="body1">$200</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1, mt:5 }}>
            <Card>
              <CardContent>
                <img src={photo8} alt="Left Image 3" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                LG 260 L 3 Star Frost
                </Typography>
                <Typography variant="body1">$300</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1, mt:5  }}>
            <Card>
              <CardContent>
                <img src={photo9} alt="Left Image 4" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                SONY PLAYSTATION 5
                </Typography>
                <Typography variant="body1">$400</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
          <Box sx={{ mx: 1, mt:5 }}>
            <Card>
              <CardContent>
                <img src={photo} alt="Left Image 5" style={cardImageStyle} />
                <Typography variant="h6" component="h4">
                Super Boost Headphones
                </Typography>
                <Typography variant="body1">$500</Typography>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
};

export default CardRow;
