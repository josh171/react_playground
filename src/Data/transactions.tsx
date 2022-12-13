import { ITransactionData } from "../Context/TypesAndStates";

export const transactions: ITransactionData[] = [
  {
    description: "Footy (5-a-side)",
    date: new Date("2022-04-22T18:25:43.511Z"),
    amount: 45,
    balance_type: "leisure",
    payment_type: "credit",
  },
  {
    description: "Deposit",
    date: new Date("2022-04-13T18:25:43.511Z"),
    amount: 100,
    balance_type: "deposit",
    payment_type: "debit",
  },
  {
    description: "Deposit",
    date: new Date("2022-05-30T18:25:43.511Z"),
    amount: 150,
    balance_type: "deposit",
    payment_type: "debit",
  },
  {
    description: "Rent",
    date: new Date("2022-05-03T18:25:43.511Z"),
    amount: 800,
    balance_type: "utility",
    payment_type: "credit",
  },
  {
    description: "McDonalds",
    date: new Date("2022-04-17T18:25:43.511Z"),
    amount: 25.78,
    balance_type: "food",
    payment_type: "credit",
  },
  {
    description: "Footy (5-a-side)",
    date: new Date("2022-05-10T18:25:43.511Z"),
    amount: 45,
    balance_type: "leisure",
    payment_type: "credit",
  },
  {
    description: "Deposit",
    date: new Date("2022-05-23T18:25:43.511Z"),
    amount: 250,
    balance_type: "deposit",
    payment_type: "debit",
  },
  {
    description: "World Cup Sweepstake",
    date: new Date("2022-04-03T18:25:43.511Z"),
    amount: 20,
    balance_type: "leisure",
    payment_type: "debit",
  },
  {
    description: "Rent - Dad",
    date: new Date("2022-05-07T18:25:43.511Z"),
    amount: 800,
    balance_type: "utility",
    payment_type: "credit",
  },
  {
    description: "McDonalds",
    date: new Date("2022-05-27T18:25:43.511Z"),
    amount: 25.78,
    balance_type: "food",
    payment_type: "credit",
  },
];
