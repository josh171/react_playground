import React from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar, Skeleton, Toolbar } from "@mui/material";
import { orange, grey } from "@mui/material/colors";

function Topbar() {
  const skeletonStyle = { margin: "0px 10px" };
  return (
    <AppBar position="fixed" sx={{ background: grey[500] }}>
      <Toolbar>
        <Avatar sx={{ bgcolor: orange[500] }}>AS</Avatar>
        <Skeleton variant="text" width={100} style={skeletonStyle} />
        <Skeleton variant="text" width={100} style={skeletonStyle} />
        <Skeleton variant="text" width={100} style={skeletonStyle} />
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
