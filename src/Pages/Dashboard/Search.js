import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import phto from '../image/images.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#3187ED',
    minHeight: '300px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  image: {
    width: '50%',
    height: '200px',
    backgroundColor: 'transparent',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    marginRight: '10px',
    width: '300px',
  },
});

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container sx={{ mt:5 }} >
        <Grid item xs={3}  >
          <img style={{ marginTop: "50px"}}  src={phto} alt="Background" className={classes.image} />
        </Grid>
        <Grid item xs={3}>
          <h2 sx={{ mt:5 }} style={{ marginTop: "50px"}} >Sign Up for Newsletter</h2><br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua.</p>
        </Grid>
        <Grid item xs={6} className={classes.searchContainer}>
          <input type="text" placeholder="Enter your mail" className={classes.searchBar} />
          <button>Sunscribe </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
