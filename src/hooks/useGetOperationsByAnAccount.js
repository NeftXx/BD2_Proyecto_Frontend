import { useState, useCallback } from "react";
import { operationsByAnAccount } from "../services";

export const useGetOperationsByAnAccount = () => {
  const [operations, setOperations] = useState([]);

  const getOperations = useCallback(({ cui, nombre, apellido }) => {
    operationsByAnAccount({ cui, nombre, apellido })
      .then((value) => {
        if (value) {
          setOperations(value);
        } else {
          setOperations([]);
        }
      })
      .catch(console.error);
  }, []);

  return { getOperations, operations };
};
