import { useFormik } from "formik";
import { Button, TextField, Grid, Paper, Box } from "@material-ui/core";

export const FormTransactions = () => {
  const formik = useFormik({
    initialValues: {
      cuentaOrigen: "",
      cuentaDestino: "",
      monto: 0,
    },
    onSubmit: (values) => {},
  });

  return (
    <Paper>
      <Box p={2}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="cuentaOrigen"
                name="cuentaOrigen"
                label="Escribe la cuenta origen:"
                value={formik.values.cuentaOrigen}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="cuentaDestino"
                name="cuentaDestino"
                label="Escribe la cuenta destino:"
                value={formik.values.cuentaDestino}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="monto"
                name="monto"
                label="Escribe el monto:"
                type="number"
                value={formik.values.monto}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12} alignItems="center">
              <Button
                fullWidth
                color="primary"
                variant="contained"
                type="submit"
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};
