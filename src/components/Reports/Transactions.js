import { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Box,
} from "@material-ui/core";
import { useGetTransactionsByCui } from "../../hooks";

const formatLocalDate = (strDate) => {
  try {
    if (strDate) {
      const doo = new Date(strDate);
      const tzoffset = new Date(
        doo.getTime() + Math.abs(doo.getTimezoneOffset() * 60000)
      );
      const localISOTime = tzoffset.toLocaleDateString("es", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return localISOTime;
    }
  } catch (error) {
    console.error(error);
  }
  return "--";
};

export const Transactions = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { transactions, getTransactions } = useGetTransactionsByCui();

  const formik = useFormik({
    initialValues: {
      cui: "",
    },
    onSubmit: (values) => {
      getTransactions(values);
    },
  });

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <Box p={2}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="cui"
                name="cui"
                label="Escribe el cui de la persona a buscar"
                value={formik.values.cui}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={3}>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box p={2}>
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size="medium"
            stickyHeader
            aria-label="enhanced table"
          >
            <TableHead>
              <TableRow>
                <TableCell>CUI</TableCell>
                <TableCell>Nombre completo</TableCell>
                <TableCell>Institución</TableCell>
                <TableCell>Tipo de cuenta</TableCell>
                <TableCell>Tipo de acción</TableCell>
                <TableCell>Fecha transferencia</TableCell>
                <TableCell>Monto transferido</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(
                  (
                    {
                      apellido,
                      cui,
                      institucion,
                      nombre,
                      tipo_accion,
                      tipo_cuenta,
                      fecha_transferencia,
                      monto_transferido,
                    },
                    index
                  ) => (
                    <TableRow hover key={index}>
                      <TableCell>{cui}</TableCell>
                      <TableCell>{`${nombre} ${apellido}`}</TableCell>
                      <TableCell>{institucion}</TableCell>
                      <TableCell>{tipo_cuenta}</TableCell>
                      <TableCell>{tipo_accion}</TableCell>
                      <TableCell>
                        {formatLocalDate(fecha_transferencia)}
                      </TableCell>
                      <TableCell>{monto_transferido}</TableCell>
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Box>
    </Paper>
  );
};
