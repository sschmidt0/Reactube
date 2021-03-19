import { useState } from 'react';
import { AppBar, CssBaseline, Drawer, Hidden, IconButton, List, ListItem, ListItemText, ListItemIcon, Toolbar } from '@material-ui/core/';
import { Home, AccessTime, Favorite, Menu } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: '#000014',
      color: '#DEE4E7',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#000014',
    color: '#DEE4E7',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    marginLeft: 20,
  },
  toolbarColor: {
    backgroundColor: '#000014',
    color: '#DEE4E7',
  }
}));

const ResponsiveDrawer = ({ window, history, children }) => {
  // const { window, history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuPoints = [
    {
      text: 'Home',
      icon: <Home color="secondary" />,
      onClick: () => history.push("/"),
    },
    {
      text: 'History',
      icon: <AccessTime color="secondary" />,
      onClick: () => history.push("/history"),
    },
    {
      text: 'Liked videos',
      icon: <Favorite color="secondary" />,
      onClick: () => history.push("/favourites"),
    }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={ classes.toolbar } />
      <List>
        { menuPoints.map((menuPoint, index) => (
          <ListItem button key={ index } onClick={ menuPoint.onClick }>
            <ListItemIcon>{ menuPoint.icon }</ListItemIcon>
            <ListItemText primary={ menuPoint.text } />
          </ListItem>
        )) }
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar className={ classes.toolbarColor }>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={ handleDrawerToggle }
            className={ classes.menuButton }
          >
            <Menu />
          </IconButton>
          <h1 className={ classes.logo }>REACTUBE</h1>
        </Toolbar>
      </AppBar>
      <nav className={ classes.drawer } aria-label="Video folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={ container }
            variant="temporary"
            anchor="left"
            open={ mobileOpen }
            onClose={ handleDrawerToggle }
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            { drawer }
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            { drawer }
          </Drawer>
        </Hidden>
      </nav>
      <main className={ classes.content }>
        <div className={ classes.toolbar } />
          { children }
      </main>
    </div>
  );
};

export default withRouter(ResponsiveDrawer);
