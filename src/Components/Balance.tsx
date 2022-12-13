import {
  Box,
  Card,
  CardContent,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useAppContext } from "../Context";
import CircleIcon from "@mui/icons-material/Circle";
import { ITransactionData } from "../Context/TypesAndStates";
import { blue, green, orange, purple } from "@mui/material/colors";

function Balance() {
  const { balance, transactions } = useAppContext();
  const returnBalanceTotal = (balance: string) => {
    const filteredBalance = transactions.filter(
      (item: ITransactionData) => item.balance_type === balance
    );
    const sum = filteredBalance.reduce((accumulator, object) => {
      return accumulator + object.amount;
    }, 0);
    return sum;
  };
  return (
    <Box sx={{ pr: 55, pl: 55, pt: 10, pb: 10 }}>
      <Card>
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="body1" align="center">
              Balance:
            </Typography>
            <Typography variant="h4" align="center">
              £{balance}
            </Typography>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={6}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon fontSize="small" sx={{ color: purple[500] }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Leisure: ${returnBalanceTotal("leisure")}`}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={6}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon fontSize="small" sx={{ color: orange[500] }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Food: ${returnBalanceTotal("food")}`}
                  />
                </ListItem>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={6}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon fontSize="small" sx={{ color: blue[500] }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Utility: ${returnBalanceTotal("utility")}`}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={6}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon fontSize="small" sx={{ color: green[500] }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Deposit: ${returnBalanceTotal("deposit")}`}
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Balance;
