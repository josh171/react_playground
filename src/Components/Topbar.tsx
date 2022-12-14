import AppBar from "@mui/material/AppBar";
import { Avatar, IconButton, Toolbar, Typography } from "@mui/material";

function Topbar() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <Avatar src="/images/image1 (2).jpeg" />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ color: '#000' }}>Joshua Delany-Booth</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
