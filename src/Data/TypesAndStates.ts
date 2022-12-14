import { transactions } from "./transactions"

export type TransactionType = 'topup' | 'withdraw' | 'transaction'
export type TransferType = 'topup' | 'withdraw'
export type BalanceType = 'leisure' | 'food' | 'utility' | 'deposit'

// Transaction interface
export interface ITransactionData {
  date: Date;
  description: string;
  balance_type: BalanceType;
  amount: number;
  transaction_type: TransactionType;
}

// App context state interface
export interface IContext {
  amount: number
  setAmount: (balance: number) => void
  transferType: TransferType
  setTransferType: (transfer: TransferType) => void
  transactions: any[]
  setTransactions: (transactions: any) => void
  balance: number
  setBalance: (balance: number) => void
}

// Default form for app

// Default app context with links/references to default states/data
export const defaultContext: IContext = {
  amount: 50,
  setAmount: () => {},
  transferType: 'topup',
  setTransferType: () => {},
  transactions: transactions,
  setTransactions: () => [],
  balance: 950,
  setBalance: () => {}
};