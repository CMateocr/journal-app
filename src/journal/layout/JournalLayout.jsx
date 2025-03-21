import { Box, Grid2, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 255;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{display: 'flex'}} className="animate__animated animate__fadeIn animate__faster">

      {/* Navbar */}

      <NavBar drawerWidth={ drawerWidth } />

      <Box sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
        <SideBar drawerWidth={ drawerWidth } />
      </Box>


      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3}}
      >
        <Toolbar/>

        { children }

      </Box>

    </Box>
  )
}
