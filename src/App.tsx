import { Box, Divider, Grid, Typography } from "@mui/material";
import Balance from "./Components/Balance";
import Topbar from "./Components/Topbar";
import Transactions from "./Components/Transactions";
import { AppContextProvider } from "./Context";

function App() {
  // Things to do before sending
  //    Write comments across app
  //    Change transactions with background color
  //    Change colours to possibly MuchBetter green and grey (defintely implement more colour!)
  //    Make sure balance it working properly (when top up, should add to deposit)
  return (
    <AppContextProvider>
      <Topbar />
      <Box p={12}>
        <Typography variant="h3">Joshua Delany-Booth</Typography>
        <Divider sx={{ mt: 2 }} />
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={9}>
            <Transactions />
          </Grid>
          <Grid item xs={3}>
            <Balance />
          </Grid>
        </Grid>
      </Box>
    </AppContextProvider>
  );
}

export default App;
