import { useFormik } from "formik";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Box,
} from "@material-ui/core";

export const Login = ({ setToken }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      const { password, username } = values;
      const ok = password === username;
      if (ok) {
        setToken(ok);
      } else {
        alert("Error al iniciar sesion");
      }
    },
  });

  return (
    <Paper>
      <Box p={2}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="username"
                name="username"
                label="Escribe tu username:"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                label="Escribe tu password:"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={3} alignItems="center">
              <Button
                fullWidth
                color="primary"
                variant="contained"
                type="submit"
              >
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};
