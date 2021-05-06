import { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@material-ui/core";

/**
 *
 * @param {object} props
 * @param {Array<{
 *  cui: string,
 *  nombre: string,
 *  apellido: string,
 *  institucion: string,
 *  abreviacion: string,
 *  tipo_cuenta: string
 *  saldo_inicial: number,
 * }>} props.accounts
 * @returns
 */
export const Accounts = ({ accounts }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
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
              <TableCell>Abreviación</TableCell>
              <TableCell>Tipo de cuenta</TableCell>
              <TableCell>Saldo inicial</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                (
                  {
                    abreviacion,
                    apellido,
                    cui,
                    institucion,
                    nombre,
                    saldo_inicial,
                    tipo_cuenta,
                  },
                  index
                ) => (
                  <TableRow hover key={index}>
                    <TableCell>{cui}</TableCell>
                    <TableCell>{`${nombre} ${apellido}`}</TableCell>
                    <TableCell>{institucion}</TableCell>
                    <TableCell>{abreviacion}</TableCell>
                    <TableCell>{tipo_cuenta}</TableCell>
                    <TableCell>{saldo_inicial}</TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={accounts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
