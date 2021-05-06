import { useState, useCallback } from "react";
import { transactionsByCui } from "../services";

export const useGetTransactionsByCui = () => {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = useCallback(({ cui }) => {
    transactionsByCui({ cui }).then(setTransactions).catch(console.error);
  }, []);

  return { transactions, getTransactions };
};
