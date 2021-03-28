import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Avatar from '@material-ui/core/Avatar';

import logo from '../../logo.png';
import { logoutRequest } from '../../actions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Sidebar = ({ props }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutRequest());
    history.push('/login');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div style={{ textAlign: 'center' }}>
          <img src={logo} alt='agriculture business' width='110px' />
        </div>
        <Divider />
        <List>
          <ListItem button key='Dashboard' onClick={() => history.push('/')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>

          {/* <ListItem button key='View Job' onClick={() => history.push('/view-job')}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='View Job' />
          </ListItem> */}

          <ListItem button key='All Business' onClick={() => history.push('/jobs')}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='All Business' />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default Sidebar;
