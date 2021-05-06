import { useState, useEffect } from "react";
import { getInstitutions } from "../services";

export const useGetInstitutions = () => {
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    getInstitutions()
      .then(setInstitutions)
      .catch(console.error);
  }, []);

  return { institutions }
};
