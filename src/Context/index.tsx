import { createContext, FunctionComponent, useContext, useState } from "react";
import { defaultContext, IContext, TransferType } from "../Data/TypesAndStates";
import { transactions as transactionData } from "../Data/transactions";

export const AppContext = createContext(defaultContext);

// Created shortcut to app context (so don't have to import useContext all the time)
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: FunctionComponent<Record<string, any>> = ({ children }) => {
  // Defaul app states with links to default data/state
  const [amount, setAmount] = useState(50);
  const [transferType, setTransferType] = useState<TransferType>("topup")
  const [transactions, setTransactions] = useState(transactionData);
  const [balance, setBalance] = useState(950);
  // Strongly typed context
  const context: IContext = { amount, setAmount, transferType, setTransferType, transactions, setTransactions, balance, setBalance };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
