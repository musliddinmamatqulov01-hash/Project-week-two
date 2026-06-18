import React from "react";
import { Drawer, Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomDrawer({ open, setOpen }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box sx={{ width: 250, padding: 2 }}>
        
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>

        <List>
          <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Tours" />
          </ListItem>
  <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Destinations" />
          </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Activities" />
          </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Hotel" />
          </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Rental" />
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Pages" />
            
          </ListItem>






        </List>

      </Box>
    </Drawer>
  );
}