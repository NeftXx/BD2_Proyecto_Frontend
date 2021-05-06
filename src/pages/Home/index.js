import { useState } from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import {
  Accounts,
  Institutions,
  OperationsByAnAccount,
  TotalCreditsAndDebtisByInstitution,
  Transactions,
  FormTransactions
} from "../../components";
import { useGetInstitutions, useGetAccounts } from "../../hooks";

const Home = () => {
  const [index, setIndex] = useState(0);
  const { accounts } = useGetAccounts();
  const { institutions } = useGetInstitutions();

  const handleChange = (event, value) => {
    setIndex(value);
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <Box p={2}>
      <Tabs value={index} fullWidth onChange={handleChange}>
        <Tab label="Cuentas" />
        <Tab label="Instituciones" />
        <Tab label="Operaciones por cuenta" />
        <Tab label="Totales de créditos y débitos por institución" />
        <Tab label="Transacciones por usuario" />
        <Tab label="Realizar nuevas transacciones" />
      </Tabs>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        <Accounts accounts={accounts} />
        <Institutions institutions={institutions} />
        <OperationsByAnAccount />
        <TotalCreditsAndDebtisByInstitution />
        <Transactions />
        <FormTransactions />
      </SwipeableViews>
    </Box>
  );
};

export default Home;
