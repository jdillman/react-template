import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar component={Container} className={classes.toolbar} variant="dense">
          <Typography className={classes.title} variant="h4" color="inherit" noWrap>
            {process.env.TITLE}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop} />
          <div className={classes.sectionMobile} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);
