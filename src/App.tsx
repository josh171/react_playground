import { Box, Grid } from "@mui/material";
import Balance from "./Components/Balance";
import Topbar from "./Components/Topbar";
import Transactions from "./Components/Transactions";
import { AppContextProvider } from "./Context";

function App() {
  // Things to do before sending
  //    Change transactions with background color
  //    Change colours to possibly MuchBetter green and grey (defintely implement more colour!)
  //    Make sure balance it working properly (when top up, should add to deposit)

  return (
    <AppContextProvider>
      <Topbar />
      <Box p={12}>
        <Grid container spacing={2}>
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
