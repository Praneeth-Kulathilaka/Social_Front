import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box 
    flex={2} 
    padding={2} 
    sx={{display: {xs: "none", sm: "block"}}}>
      <Box position={"fixed"} width={300}>
        <Typography varient="h6" fontWeight={300}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar 
            alt="Remy Sharp" 
            src="https://images.pexels.com/photos/6765538/pexels-photo-6765538.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </AvatarGroup>

        <Typography varient="h6" fontWeight={300} sx={{marginTop:2}}>Recent Photos</Typography>
        <ImageList  cols={3} rowHeight={100} gap={5}>
            <ImageListItem >
              <img
                src="https://images.pexels.com/photos/7363747/pexels-photo-7363747.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                style={{height: '100%' }}
                
              />
            </ImageListItem>
            <ImageListItem >
              <img
                src="https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                style={{  height: '100%' }}
              />
            </ImageListItem>
            <ImageListItem >
              <img
                src="https://images.pexels.com/photos/19652315/pexels-photo-19652315/free-photo-of-woman-hand-holding-motivation-note.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                style={{ height: '100%' }}
              />
            </ImageListItem>
        </ImageList>

        <Typography varient="h6" fontWeight={300} sx={{marginTop:2}}>Recent Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/6765538/pexels-photo-6765538.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar