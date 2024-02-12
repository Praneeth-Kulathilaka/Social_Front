import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Feed from './component/Feed';
import Rightbar from './component/Rightbar';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import AddIcon from './component/Add';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"} >
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <AddIcon />
      </Box>
    </ThemeProvider>
  );
}

export default App;
