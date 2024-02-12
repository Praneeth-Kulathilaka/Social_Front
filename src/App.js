import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './component/Feed';
import Rightbar from './component/Rightbar';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import AddIcon from './component/Add';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"} >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddIcon />
    </Box>
  );
}

export default App;
