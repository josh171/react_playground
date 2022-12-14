import { ITransactionData } from "./TypesAndStates";

export const transactions: ITransactionData[] = [
  {
    description: "Footy (5-a-side)",
    date: new Date("2022-04-22T18:25:43.511Z"),
    amount: 45,
    balance_type: "leisure",
    transaction_type: "transaction",
  },
  {
    description: "Deposit",
    date: new Date("2022-04-13T18:25:43.511Z"),
    amount: 100,
    balance_type: "deposit",
    transaction_type: "transaction",
  },
  {
    description: "Deposit",
    date: new Date("2022-05-30T18:25:43.511Z"),
    amount: 150,
    balance_type: "deposit",
    transaction_type: "transaction",
  },
  {
    description: "Rent",
    date: new Date("2022-05-03T18:25:43.511Z"),
    amount: 800,
    balance_type: "utility",
    transaction_type: "transaction",
  },
  {
    description: "McDonalds",
    date: new Date("2022-04-17T18:25:43.511Z"),
    amount: 25.78,
    balance_type: "food",
    transaction_type: "transaction",
  },
  {
    description: "Footy (5-a-side)",
    date: new Date("2022-05-10T18:25:43.511Z"),
    amount: 45,
    balance_type: "leisure",
    transaction_type: "transaction",
  },
  {
    description: "Deposit",
    date: new Date("2022-05-23T18:25:43.511Z"),
    amount: 250,
    balance_type: "deposit",
    transaction_type: "transaction",
  },
  {
    description: "World Cup Sweepstake",
    date: new Date("2022-04-03T18:25:43.511Z"),
    amount: 20,
    balance_type: "leisure",
    transaction_type: "transaction",
  },
  {
    description: "Rent - Dad",
    date: new Date("2022-05-07T18:25:43.511Z"),
    amount: 800,
    balance_type: "utility",
    transaction_type: "transaction",
  },
  {
    description: "McDonalds",
    date: new Date("2022-05-27T18:25:43.511Z"),
    amount: 25.78,
    balance_type: "food",
    transaction_type: "transaction",
  },
];
