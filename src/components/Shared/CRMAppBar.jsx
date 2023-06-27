import React from 'react';
import { IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import Settings from './Settings';


const CRMAppBar = ({AppBar, handleDrawer, open}) => {
    return (
        <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              ...(open && { display: "none" }),
            }}
            variant="h6"
            noWrap
            component="div"
          >
            VIVIAN
          </Typography>
         <Settings />
        </Toolbar>
      </AppBar>
    );
};

export default CRMAppBar;