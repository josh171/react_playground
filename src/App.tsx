import { Box, Grid } from "@mui/material";
import Balance from "./Components/Balance";
import Topbar from "./Components/Topbar";
import Transactions from "./Components/Transactions";
import { AppContextProvider } from "./Context";

function App() {
  // Main app component, wrapped in context provider
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
