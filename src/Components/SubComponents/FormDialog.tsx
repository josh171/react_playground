import { Dialog, DialogContent, TextField, Stack, Button, ToggleButtonGroup, ToggleButton, InputAdornment, Typography } from "@mui/material";
import React, { ChangeEventHandler } from "react";
import { useAppContext } from "../../Context";
import { TransactionType } from "../../Data/TypesAndStates";

interface IDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  transaction_type: TransactionType;
}

function FormDialog({ open, setOpen, transaction_type }: IDialogProps) {
  const { amount, setAmount, transactions, setTransactions, transferType, balance, setBalance } = useAppContext();
  // Variable to calculate the balance
  const sum = transaction_type === "topup" ? balance + amount : transaction_type === "withdraw" ? balance - amount : balance + amount;
  const handleChange = (event: React.MouseEvent<HTMLElement> | ChangeEventHandler<HTMLInputElement>, newAmount: number) => {
    setAmount(newAmount);
  };
  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    // Adding new entry to transaction list
    setTransactions([...transactions, {
      description: transferType,
      date: new Date(),
      amount,
      balance_type: transaction_type === "topup" ? "deposit" : "withdraw",
      transaction_type 
    }]);
    // Setting amount back to default value
    setAmount(50);
    // Setting new balance
    setBalance(sum);
    // Closing form dialog box
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              name="amount"
              label="Amount"
              fullWidth
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">£</InputAdornment>
                ),
              }}
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              variant="outlined"
            />
            <ToggleButtonGroup
              color="primary"
              value={amount}
              exclusive
              fullWidth
              onChange={handleChange}
            >
              {[10.0, 50.0, 100.0].map((amount: number) => (
                <ToggleButton value={amount} key={amount}>£{amount}</ToggleButton>
              ))}
            </ToggleButtonGroup>
            <Button variant="contained" color="primary" type="submit">
              Confirm {transaction_type}
            </Button>
            <Typography variant="body1">Your new balance will be: £{sum}</Typography>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default FormDialog;
