import {
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";
import { useAppContext } from "../Context";
import { returnTransactionIcon } from "../Context/returnTransactionIcon";
import { ITransactionData, PaymentType } from "../Context/TypesAndStates";
import FormDialog from "./SubComponents/FormDialog";

function Transactions() {
  const { transactions } = useAppContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [paymentType, setPaymentType] = useState<PaymentType>("credit");
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const buttonProps: any = {
    variant: "contained",
    fullWidth: true,
    sx: { background: orange[500] },
  };
  const currentEntities = transactions.filter((item: ITransactionData) =>
    item.description.toLowerCase().includes(filter.toLowerCase())
  );
  const rows = currentEntities.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4">Transactions</Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={3} />
            <Grid item xs={6}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                  <Button
                    {...buttonProps}
                    onClick={() => {
                      setOpen(true);
                      setPaymentType("debit");
                    }}
                  >
                    Top Up
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    {...buttonProps}
                    onClick={() => {
                      setOpen(true);
                      setPaymentType("credit");
                    }}
                  >
                    Withdraw
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} />
          </Grid>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12}>
              <TextField
                placeholder="Please search by description..."
                fullWidth
                size="small"
                margin="dense"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setPage(0);
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="10" />
              <TableCell>
                <strong>Date</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Amount</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .sort((a: any, b: any) => b.date - a.date)
              .map(
                (
                  {
                    date,
                    description,
                    amount,
                    payment_type,
                    balance_type,
                  }: ITransactionData,
                  index: number
                ) => (
                  <TableRow key={index}>
                    <TableCell>{returnTransactionIcon(balance_type)}</TableCell>
                    <TableCell>{new Date(date).toDateString()}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell align="right">
                      <strong>
                        {payment_type === "debit"
                          ? `-£${amount}`
                          : `£${amount}`}
                      </strong>
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={currentEntities.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
      <FormDialog open={open} setOpen={setOpen} payment_type={paymentType} />
    </>
  );
}

export default Transactions;
