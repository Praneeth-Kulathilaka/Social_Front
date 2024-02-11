import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './component/Feed';
import Rightbar from './component/Rightbar';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"} >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
