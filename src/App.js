import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";
import Feed from "./Components/Feed";
import NavBar from "./Components/Navbar";
import {Box,Stack, ThemeProvider} from "@mui/material";
import Add from "./Components/Add";
import { useState } from "react";
import { createTheme } from '@mui/material/styles';





function App() {
  const [mode,setMode] = useState("light")
    const darkTheme = createTheme ({
      palette:{
        mode:mode
      }
    })  
  return (
    <ThemeProvider theme={darkTheme}>
      
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar mode={mode} setMode={setMode}/>
      <Feed/>
      <RightBar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App; 
