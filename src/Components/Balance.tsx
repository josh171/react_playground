import { Button, Grid, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { useAppContext } from "../Context";
import CircleIcon from "@mui/icons-material/Circle";
import { ITransactionData, PaymentType } from "../Context/TypesAndStates";
import { blue, green, orange, purple } from "@mui/material/colors";
import { useState } from "react";
import FormDialog from "./SubComponents/FormDialog";

function Balance() {
  const { balance, transactions } = useAppContext();
  const [open, setOpen] = useState(false);
  const [paymentType, setPaymentType] = useState<PaymentType>("credit");
  const returnBalanceTotal = (balance: string) => {
    // Variable to filter down balance type from transactions given by prop
    const filteredBalance = transactions.filter(
      (item: ITransactionData) => item.balance_type === balance
    );
    // Variable to sum/add up all the balance total
    const sum = filteredBalance.reduce((accumulator, object) => {
      return accumulator + object.amount;
    }, 0);
    return sum;
  };
  // Standard props for button, so don't have to rewrite the same props each time
  const buttonProps: any = {
    variant: "contained",
    fullWidth: true,
    sx: { background: orange[500] },
  };
  return (
    <Stack spacing={1}>
      <Typography variant="h5" align="center">
        Your Balance:
      </Typography>
      <Typography variant="h4" align="center">
        <strong>£{balance}</strong>
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
            <ListItemText primary={`Food: ${returnBalanceTotal("food")}`} />
          </ListItem>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={6}>
          <ListItem>
            <ListItemIcon>
              <CircleIcon fontSize="small" sx={{ color: blue[500] }} />
            </ListItemIcon>
            <ListItemText primary={`Utility: ${returnBalanceTotal("utility")}`} />
          </ListItem>
        </Grid>
        <Grid item xs={6}>
          <ListItem>
            <ListItemIcon>
              <CircleIcon fontSize="small" sx={{ color: green[500] }} />
            </ListItemIcon>
            <ListItemText primary={`Deposit: ${returnBalanceTotal("deposit")}`} />
          </ListItem>
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <Button {...buttonProps} onClick={() => {
              setOpen(true);
              setPaymentType("debit");
            }}
          >
            Top Up
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button {...buttonProps} onClick={() => {
              setOpen(true);
              setPaymentType("credit");
            }}
          >
            Withdraw
          </Button>
        </Grid>
      </Grid>
      <FormDialog open={open} setOpen={setOpen} payment_type={paymentType} />
    </Stack>
  );
}

export default Balance;
