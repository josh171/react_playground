import { Box, Stack } from "@mui/material";
import Balance from "./Components/Balance";
import Topbar from "./Components/Topbar";
import Transactions from "./Components/Transactions";
import { AppContextProvider } from "./Context";

function App() {
  return (
    <AppContextProvider>
      <Topbar />
      <Box sx={{ p: 10 }}>
        <Stack spacing={2}>
          <Balance />
          <Transactions />
        </Stack>
      </Box>
    </AppContextProvider>
  );
}

export default App;
