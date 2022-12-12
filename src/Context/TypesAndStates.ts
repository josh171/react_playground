import { transactions } from "../Data/transactions"

export type PaymentType = 'credit' | 'debit'
export type BalanceType = 'leisure' | 'food' | 'utility' | 'deposit'

export interface ITransactionData {
  date: Date;
  description: string;
  balance_type: BalanceType;
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
  balance_type: "deposit",
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