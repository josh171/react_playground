import { Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, TablePagination, TextField, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useAppContext } from "../Context";
import { returnTransactionIcon } from "../Data/returnTransactionIcon";
import { ITransactionData } from "../Context/TypesAndStates";

function Transactions() {
  const { transactions } = useAppContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [filter, setFilter] = useState("");
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  // Function to handle the rows per page and set current page to 0, to make sure user can see first items
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // Variable to filter transactions (lower casing) to match the search filter state (controlled by user)
  const currentEntities = transactions.filter((item: ITransactionData) =>
    item.description.toLowerCase().includes(filter.toLowerCase())
  );
  // Variable to slice transaction entities for pagination (based on rows per page and page state, controlled by user)
  const rows = currentEntities.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  return (
    <>
      <Typography variant="h4">Transactions</Typography>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <TextField
            placeholder="Please search..."
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TablePagination
            component="div"
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            colSpan={3}
            count={currentEntities.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <List>
            {rows.sort((a: any, b: any) => b.date - a.date).map(({balance_type, description, date, amount, payment_type }: ITransactionData, index: number) => (
              <Fragment key={index}>
                <ListItemButton>
                  <ListItemIcon>
                    {returnTransactionIcon(balance_type)}
                  </ListItemIcon>
                  <ListItemText
                    primary={<strong>{description}</strong>}
                    secondary={`${new Date(date).toLocaleTimeString()} | ${new Date(date).toLocaleDateString()}`}
                  />
                  <strong>{payment_type === "debit" ? `£${amount}` : `-£${amount}`}</strong>
                </ListItemButton>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
}

export default Transactions;
