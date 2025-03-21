import { ArrowBackIosNewOutlined, TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SidebarItem } from "./SidebarItem";

export const SideBar = ({ drawerWidth = 240, onShowSidebar }) => {
  const { displayName } = useSelector(state => state.auth);

  const { notes } = useSelector(state => state.journal);

  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >

      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >

        <Toolbar size={{ xs: 12 }} sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
          <IconButton sx={{ display: {sm: 'none'}}}>
            <ArrowBackIosNewOutlined 
              onClick={ onShowSidebar }
            />
          </IconButton>
        </Toolbar>
        <Divider />

        <List>
          {
            notes.map(note => (
              <SidebarItem
                key={note.id}
                {...note}
                note={note}
              />
            ))
          }
        </List>

      </Drawer>

    </Box>
  )
}
