import { useState, useCallback } from "react";
import { totalCreditsAndDebitsByInstitution } from "../services";

export const useGetTotalCreditsAndDebitsByInstitution = () => {
  const [totalCreditsAndDebits, setTotalCreditsAndDebits] = useState({
    creditos: 0,
    debitos: 0,
  });

  const getTotales = useCallback(({ institucion }) => {
    if (institucion) {
      totalCreditsAndDebitsByInstitution({ institucion })
        .then(setTotalCreditsAndDebits)
        .catch(console.error);
    }
  }, []);

  return { getTotales, totalCreditsAndDebits };
};
