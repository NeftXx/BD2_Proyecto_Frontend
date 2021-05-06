import { BACKEND_URI } from "../settings";

export const getAccounts = async () => {
  const response = await fetch(`${BACKEND_URI}/reports/accounts`, {
    method: "POST",
  });
  const data = await response.json();
  return data;
};

export const getInstitutions = async () => {
  const response = await fetch(`${BACKEND_URI}/reports/institutions`, {
    method: "POST",
  });
  const data = await response.json();
  return data;
};

export const operationsByAnAccount = async ({ cui, nombre, apellido }) => {
  const response = await fetch(
    `${BACKEND_URI}/reports/operationsByAnAccountHolder`,
    {
      method: "POST",
      body: JSON.stringify({ cui, nombre, apellido }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const data = await response.json();
  return data;
};

export const totalCreditsAndDebitsByInstitution = async ({ institucion }) => {
  const response = await fetch(
    `${BACKEND_URI}/reports/totalCreditsAndDebitsByInstitution`,
    {
      method: "POST",
      body: JSON.stringify({ institucion }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const data = await response.json();
  return data;
};

export const transactionsByCui = async ({ cui }) => {
  const response = await fetch(`${BACKEND_URI}/reports/transactionsByCui`, {
    method: "POST",
    body: JSON.stringify({ cui }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
};
