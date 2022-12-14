import AppBar from "@mui/material/AppBar";
import { Avatar, IconButton, Skeleton, Toolbar } from "@mui/material";
import { grey } from "@mui/material/colors";

function Topbar() {
  const skeletonStyle = { margin: "0px 10px" };
  return (
    <AppBar position="fixed" sx={{ background: grey[500] }}>
      <Toolbar>
        <IconButton>
          <Avatar src="/images/image1 (2).jpeg" />
        </IconButton>
        <Skeleton variant="text" width={100} style={skeletonStyle} />
        <Skeleton variant="text" width={100} style={skeletonStyle} />
        <Skeleton variant="text" width={100} style={skeletonStyle} />
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
