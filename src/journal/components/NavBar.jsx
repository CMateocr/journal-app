import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks";

export const NavBar = ({ drawerWidth }) => {

  const dispatch = useDispatch();

  const onLogout = () => {

    dispatch( startLogout() );
    
  }

  return (
    <AppBar 
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${ drawerWidth }px)`},
        ml: { sm: `${ drawerWidth }px` }
      }}
    >
      <Toolbar >
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid2 
          container 
          direction="row" 
          justifyContent="space-between"
          alignItems="center"
          sx={{ flexGrow: 1 }} 
        >

          <Typography variant="h6" noWrap component='div'>Journal App</Typography>

          <IconButton 
            onClick={ onLogout }
            color="error"
          >
            <LogoutOutlined/>
          </IconButton>

        </Grid2>

      </Toolbar>
    </AppBar>
  )
}
