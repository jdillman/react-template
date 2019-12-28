import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import PageHeader from '../components/PageHeader';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

export default function View({ title, children }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column">
      <Grid item ys={1}>
        <PageHeader />
      </Grid>
      <Grid item ys={11}>
        <Grid container direction="column">
          <Grid item ys={1}>
            {title}
          </Grid>
          <Grid item ys={11}>
            <Container className={classes.container} component="main">
              {children}
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
