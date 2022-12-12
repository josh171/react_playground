import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../Context";

function Balance() {
  const { balance } = useAppContext();
  return (
    <Box sx={{ pr: 55, pl: 55, pt: 10, pb: 10 }}>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="body1" align="center">
              Balance:
            </Typography>
            <Typography variant="h4" align="center">
              £{balance}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Balance;
