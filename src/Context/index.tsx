import { createContext, FunctionComponent, useContext, useState } from "react";
import { defaultContext, defaultForm, IContext } from "./TypesAndStates";
import { transactions as transactionData } from "../Data/transactions";

export const AppContext = createContext(defaultContext);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: FunctionComponent<Record<string, any>> = ({
  children,
}) => {
  const [form, setForm] = useState(defaultForm);
  const [transactions, setTransactions] = useState(transactionData);
  const [balance, setBalance] = useState(950);
  const context: IContext = {
    form,
    setForm,
    transactions,
    setTransactions,
    balance,
    setBalance,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
