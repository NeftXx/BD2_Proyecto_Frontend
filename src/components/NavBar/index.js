import { useState } from "react";
import { AppBar, Toolbar, Switch, Typography, Button } from "@material-ui/core";
import { Dashboard as NavBarIcon } from "@material-ui/icons";
import { Link } from "wouter";
import useStyles from "./styles";

const NavBar = ({ changeTheme = () => {}, token, setToken }) => {
  const [check, setCheck] = useState(true);

  const handleChange = () => {
    setCheck(!check);
    changeTheme();
  };

  const classes = useStyles();

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <NavBarIcon className={classes.icon} />
        <Link href="/">
          <Typography variant="h6" color="inherit" noWrap>
            Proyecto Base de datos 2
          </Typography>
        </Link>
        <div className={classes.switchTheme}>
          <Typography>Tema</Typography>
          <Switch
            checked={check}
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        {token && (
          <Button
            onClick={() => {
              setToken && setToken(false);
            }}
          >
            Cerrar sesión
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
