import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import Apps from 'material-ui-icons/Apps';
import Notifications from 'material-ui-icons/Notifications';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import { Link } from 'react-router-dom';

const styles = theme => {
  return {
    root: {
      position: 'static',
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      height: '60px',
    },
    center: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    right: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    icon: {
      maxWidth: '35px',
      maxHeight: '35px',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(0, 0, 0, 0.52)',
    },
    btn: {
      margin: '3px',
    },
    indicator: {
      color: 'blue',
    },
  };
};

class SimpleAppBar extends Component {
  state = { loggedIn: true, value: 'Activities' };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  center(classes) {
    const { value } = this.state;
    const labels = ['Activities', 'Profile'];
    const pathName = window.location.pathname;
    return (
      <Tabs
        indicatorColor="invisible"
        className={`${classes.item} ${classes.center}`}
        value={value}
        onChange={this.handleChange}>
        {labels.map((label, i) => (
          <Link to={label}>
            <Tab
              key={i}
              value={label}
              style={{ color: pathName.match(label) ? 'black' : 'rgba(126, 126, 126, 0.45)' }}
              label={label}
            />
          </Link>
        ))}
      </Tabs>
    );
  }

  right(classes) {
    const { loggedIn } = this.state;
    return loggedIn ? (
      <div className={`${classes.item} ${classes.right}`}>
        <IconButton>
          <Apps />
        </IconButton>

        <IconButton>
          <Badge color="accent" badgeContent={1}>
            <Notifications className={classes.notf} />
          </Badge>
        </IconButton>

        <IconButton onClick={() => this.setState(s => ({ loggedIn: false }))} className={classes.icon}>
          A
        </IconButton>
      </div>
    ) : (
      <div className={`${classes.item} ${classes.right}`}>
        <Button to="/a" onClick={() => this.setState(s => ({ loggedIn: true }))} className={`${classes.btn}`} raised>
          Login
        </Button>
      </div>
    );
  }

  left(classes) {
    return (
      <div className={classes.item}>
        <Typography style={{ cursor: 'pointer' }} onClick={() => this.pushHistory('/')} type="headline">
          Wuteva
        </Typography>
      </div>
    );
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar color="default" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            {this.left(classes)}
            {this.center(classes)}
            {this.right(classes)}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
