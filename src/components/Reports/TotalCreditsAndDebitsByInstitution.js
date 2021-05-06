import { useFormik } from "formik";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { useGetTotalCreditsAndDebitsByInstitution } from "../../hooks";

export const TotalCreditsAndDebtisByInstitution = () => {
  const {
    totalCreditsAndDebits,
    getTotales,
  } = useGetTotalCreditsAndDebitsByInstitution();

  const formik = useFormik({
    initialValues: {
      institucion: "",
    },
    onSubmit: (values) => {
      getTotales(values);
    },
  });

  return (
    <Paper>
      <Box p={2}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="institucion"
                name="institucion"
                label="Escribe la institucion a buscar"
                value={formik.values.institucion}
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
        <Typography variant="h2" gutterBottom>
          Crédito: {totalCreditsAndDebits.creditos}
        </Typography>
        <Typography variant="h2" gutterBottom>
          Débito: {totalCreditsAndDebits.debitos}
        </Typography>
      </Box>
    </Paper>
  );
};
