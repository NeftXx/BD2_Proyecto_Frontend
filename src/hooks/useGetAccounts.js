import { useState, useEffect } from "react";
import { getAccounts } from "../services";

export const useGetAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts()
      .then(setAccounts)
      .catch(console.error)
  }, []);

  return { accounts };
}
