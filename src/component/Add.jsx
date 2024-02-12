import styled from '@emotion/styled';
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})
const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px"
})
const AddIcon = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip onClick={event=>setOpen(true)}
      title="Delete" 
      sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
      <Fab color="primary" aria-label="add">
        <Add />
    </Fab>
    </Tooltip>
    <StyledModal
      open={open}
      onClose={(event)=>setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    > 
      <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} padding={3} borderRadius={5}>
        <Typography varient="h6" color="gray" textAlign="center">Create post</Typography>
        <UserBox>
        <Avatar 
            alt="Remy Sharp" 
            src="https://images.pexels.com/photos/6765538/pexels-photo-6765538.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            sx={{width:30, height:30}}/>
        <Typography>Remy Sharp</Typography>
        </UserBox>
        <TextField
          id="standard-multiline-static"
          sx={{width:"100%"}}
          multiline
          rows={4}
          placeholder="What's on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} marginTop={2} marginBottom={3}>
          <EmojiEmotions color='primary'/>
          <Image color='secondary'/>
          <VideoCameraBack color='success'/>
          <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup 
          fullWidth
          variant="contained" 
          aria-label="Basic button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
      </Box>

    </StyledModal>
    </>
  );
}

export default AddIcon