import { Dialog, DialogContent, TextField, Stack, Button } from "@mui/material";
import React from "react";
import { useAppContext } from "../../Context";
import { defaultForm, ITransactionData, PaymentType } from "../../Context/TypesAndStates";

interface IDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  payment_type: PaymentType;
}
interface FormField {
  name: string;
  label: string;
  component?: (item: ITransactionData, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, index: number) => React.ReactNode;
}
// Standard props for textfield, so don't have to rewrite them
const fieldProps: any = {
  margin: "dense",
  size: "small",
  variant: "standard",
  require: "true",
};
// Variable to gather fields and map them. Following the FormField interface
const fields: FormField[] = [
  {
    name: "date",
    label: "Date",
    component: ({ date }, handleChange, index) => {
      return (
        <TextField
          {...fieldProps}
          key={index}
          label="Date"
          type="datetime-local"
          name="date"
          value={new Date(date).toISOString().substring(0, 16)}
          onChange={handleChange}
        />
      );
    },
  },
  {
    name: "description",
    label: "Description",
  },
  {
    name: "amount",
    label: "Amount (£)",
  },
];

function FormDialog({ open, setOpen, payment_type }: IDialogProps) {
  const { form, setForm, transactions, setTransactions, balance, setBalance } = useAppContext();
  // Variable to return correct value format whether value is a date or a number
  const returnFormValue = (name: string, value: string) => {
    if (name === "amount") return parseInt(value);
    if (name === "date") return new Date(value);
    return value;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: returnFormValue(name, value),
    });
  };
  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    // Adding new entry to transaction list
    setTransactions([...transactions, form]);
    // Setting form back to default values
    setForm(defaultForm);
    // Variable to calculate the balance
    const sum = payment_type === "debit" ? balance + form.amount : balance - form.amount;
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
            {fields.map((field: FormField, index: number) =>
            // Determining whether to return standard textfield with form value, or to render the component that is passed from fields const 
              field.component ? (
                field.component(form, handleChange, index)
              ) : (
                <TextField
                  key={index}
                  label={field.label}
                  name={field.name}
                  required
                  type={field.name === "amount" ? "number" : "text"}
                  margin="dense"
                  variant="standard"
                  value={form[field.name as keyof ITransactionData]}
                  onChange={handleChange}
                />
              )
            )}
            <Button variant="contained" color="success" type="submit">
              Confirm
            </Button>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default FormDialog;
