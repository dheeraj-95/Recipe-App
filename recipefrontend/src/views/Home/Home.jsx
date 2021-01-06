import React from 'react';
// import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  // Typography,
  // Card,
  // CardActionArea,
  // CardActions,
  // CardContent,
  Grid
} from '@material-ui/core'

// import CssBaseline from '@material-ui/core/CssBaseline'
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Grid from '@material-ui/core/Grid';

import { createHistory } from 'history';

// import LoadingSpinner from '../../Components/Spinner/LoadingSpinner';

export const history = createHistory();

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacong.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  gridStyle: {
    margin: '-12px',
    width: 'calc(100% + 24px)'
  },
  innerGridCard: {
    padding: '12px'
  }
}));


const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Grid >

        </Grid>
      </main>
    </div>
  );
};

export default Home;