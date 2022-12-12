import { transactions } from "../Data/transactions"

export type PaymentType = 'credit' | 'debit'

export interface ITransactionData {
  date: Date;
  description: string;
  balance_type?: string;
  amount: number;
  payment_type: PaymentType;
}

export interface IContext {
  form: ITransactionData
  setForm: (form: ITransactionData) => void
  transactions: any[]
  setTransactions: (transactions: any) => void
  balance: number
  setBalance: (balance: number) => void
}

export const defaultForm: ITransactionData = {
  date: new Date(),
  description: "",
  amount: 0,
  payment_type: "credit",
};

export const defaultContext: IContext = {
  form: defaultForm,
  setForm: () => {},
  transactions: transactions,
  setTransactions: () => [],
  balance: 950,
  setBalance: () => {}
};