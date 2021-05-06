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
 *  nombre: string,
 *  abreviacion: string
 * }>} props.institutions
 * @returns
 */
export const Institutions = ({ institutions }) => {
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
              <TableCell>Nombre</TableCell>
              <TableCell>Abreviación</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {institutions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ nombre, abreviacion }, index) => (
                <TableRow hover key={index}>
                  <TableCell>{nombre}</TableCell>
                  <TableCell>{abreviacion}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={institutions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
