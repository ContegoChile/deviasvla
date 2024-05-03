import { FC, ReactNode, useState } from "react";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Box, Container, Tooltip } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import CategoryIcon from '@mui/icons-material/Category';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface AuthLayoutProps {
    children: ReactNode;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
);

const menu : Array<{ name :string , icon : JSX.Element , url: string }> = [
  {
    name : 'Areas',
    icon : <CategoryIcon />,
    url  : 'areas'
  },

  {
    name : 'Blog',
    icon : <BookIcon />,
    url  : 'blog'
  },
];

export const AuthLayout: FC<AuthLayoutProps> = (props) => {
    const { children } = props;
  
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar
                    sx = {{
                        justifyContent: 'space-between',
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={ () => open ? handleDrawerClose() : handleDrawerOpen() }
                        edge="start"
                        sx={{
                        marginRight: 5,
                        // ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box
                        component="img"
                        sx={{
                            width : '263px',
                            height : '100%'
                        }}
                        alt="The house from the offer."
                        src="https://vla.contego.cl/assets/logos/vla-dark2.svg"
                    />


                    <Tooltip 
                        title="Open settings"
                    >
                        <IconButton 
                            sx={{ p: 0 }}
                            size="large"
                        >
                            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                {['Dashboard'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {menu.map(({ url , icon , name } , key ) => (
                    <ListItem key={key} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                    >
                        <ListItemIcon
                          sx={{
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                          }}
                        >
                        { icon }
                        </ListItemIcon>
                        <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Drawer>
            {/* <Container sx={{ mt : 12 , width: '100%' ,flexGrow: 1 }} >
                { children }
            </Container> */}
        </>

    );
  };