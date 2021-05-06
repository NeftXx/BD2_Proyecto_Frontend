import { useState, useMemo } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router as Wouter } from "wouter";
import Router from "./Router";
import { NavBar, Footer, Login } from "./components";

const { useMediaQuery } = require("@material-ui/core");

const App = () => {
  const [token, setToken] = useState();
  const [prefersDarkMode, updatePrefers] = useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "light" : "dark",
        },
      }),
    [prefersDarkMode]
  );

  const changeTheme = () => {
    updatePrefers(!prefersDarkMode);
  };

  return (
    <Wouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar changeTheme={changeTheme} setToken={setToken} token={token} />
        {token ? (
          <main>
            <Router />
          </main>
        ) : (
          <Login setToken={setToken} />
        )}
        <Footer />
      </ThemeProvider>
    </Wouter>
  );
};

export default App;
