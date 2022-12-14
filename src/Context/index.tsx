import { createContext, FunctionComponent, useContext, useState } from "react";
import { defaultContext, defaultForm, IContext } from "../Data/TypesAndStates";
import { transactions as transactionData } from "../Data/transactions";

export const AppContext = createContext(defaultContext);

// Created shortcut to app context (so don't have to import useContext all the time)
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: FunctionComponent<Record<string, any>> = ({ children }) => {
  // Defaul app states with links to default data/state
  const [form, setForm] = useState(defaultForm);
  const [transactions, setTransactions] = useState(transactionData);
  const [balance, setBalance] = useState(950);
  // Strongly typed context
  const context: IContext = { form, setForm, transactions, setTransactions, balance, setBalance };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
