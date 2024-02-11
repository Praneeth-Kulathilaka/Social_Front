import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { Mail, Notifications } from '@mui/icons-material';

// const theme = createTheme();

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"20px",
    alignItems:"center",
    // [theme.breakpoints.up("sm")]:{
    //   display:"none"
    // }
}))
const UserBox = styled(Box)(({theme}) =>({
    display:"none",
    gap:"20px",
    alignItems:"center",
    // [theme.breakpoints.up("sm")]:{
    //   display:"flex"
    // }
}))

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
          <EmojiNatureIcon sx={{display: {xs:"block", sm:"none"}}}/>
            <Typography varient="h5" sx={{textTransform:"Uppercase", display: {xs:"none", sm: "block"}}}>Panii's Universe</Typography>
            <Search><InputBase placeholder='Search here....'/></Search>
            <Icons>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
              <Avatar 
                sx={{height:30, width:30}} 
                alt="User Profile" 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" 
                onClick={event=>setOpen(true)}
              />
            </Icons>
            <UserBox>
              <Avatar 
                sx={{height:30, width:30}} 
                alt="User Profile" 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" 
                onClick={event=>setOpen(true)}
              />
              <Typography varient="h6">John Cena</Typography>
            </UserBox>
        </StyledToolBar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={event=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
    
  )
}

export default Navbar