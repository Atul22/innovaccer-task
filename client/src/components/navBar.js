import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ProgressBar from './common/progressBar';
import LeftDrawer from './common/drawer';
import { connect } from "react-redux";
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
    left: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

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


                  <Button color="inherit" onClick={() => {this.props.logout()}}>Logout</Button> 
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