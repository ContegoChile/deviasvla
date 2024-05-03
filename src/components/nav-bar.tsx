import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { FC, useState } from "react";

const NavBar : FC = (props) => {

    const [open, setOpen] = useState(true);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    toggleDrawer( true )

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
    );

    return  (
        <div>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                
            {DrawerList}
            </Drawer>
        </div>   
    )

}

export default NavBar ;