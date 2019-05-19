import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ProgressBar from './common/progressBar';
import LeftDrawer from './common/drawer';
import ACTIONS from '../actions/actions';
import STATE from '../const/state';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    '&:focus': {
       outline: 'none'
    }
  }
};

class NavBar extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

  handleLogout = (e) => {
    this.props.logout();
  }

  render() {
    const { classes, user, show_porgress } = this.props;
    return (
      <div className={classes.root}>
        <LeftDrawer left={this.state.left} toggleDrawer={this.toggleDrawer}/>
        <AppBar position="static" style={{ background: "orangered" }}>
          <Toolbar>
            {
              user ?
                <React.Fragment>
                  <IconButton 
                    className={classes.menuButton}
                    onClick={this.toggleDrawer(true)}
                    color="inherit" 
                    aria-label="Menu"
                    style={{textDecoration: "none"}}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                    Home
                  </Typography>


                  <Button color="inherit" onClick={this.handleLogout}>Logout</Button> 
                </React.Fragment> :
                null
            }
          </Toolbar>
        </AppBar>
        {
          show_porgress ?
            <ProgressBar /> :
            null
        }
      </div>
    );
  }
}

const mapStateToProps = (state)=> ({
    user: state.get(STATE.USER),
    show_porgress: state.get(STATE.SHOW_PROGRESS)
});

const mapDispatchToProps = (dispatch) => ({
    logout() {
      dispatch(ACTIONS.logout());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBar));