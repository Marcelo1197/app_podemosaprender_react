import React from "react";
import ReactDOM from "react-dom";
import Link from "@material-ui/core/Link";
import { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

import {
  apiLogin,
  apiNecesitoLoginP,
  fetchConToken,
  usuarioLeer,
} from "./services/pa-auth";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

import AppBar from "./components/AppMenuYMarco";

import Login from "./pages/Login/Login";
import QueHago from "./pages/QueHago";
import Charla from "./pages/Charla";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import Badge from "@material-ui/core/Badge";

const Rutas = [
  {
    path: "/",
    dsc: "Inicio",
    exact: true,
    main: () => (
      <>
        <h2>Home</h2>
        Podes ir a{" "}
        <Link component={RouterLink} to="/que-hago">
          ¿Qué hago?
        </Link>
        Podes ir a{" "}
        <Link component={RouterLink} to="/charla/bandadjango">
          #bandadjango
        </Link>
      </>
    ),
  },
  {
    path: "/como-voy",
    dsc: "¿Cómo voy?",
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/que-hago",
    dsc: "¿Qué hago?",
    main: () => <QueHago />,
    icono: (
      <Badge badgeContent={4} color="primary">
        <InboxIcon />
      </Badge>
    ),
  },
  {
    path: "/charla/:charlaid",
    dsc: "Charlas",
    main: () => <Charla />,
  },
];

const NECESITA_LOGIN = {};

export default function App() {
  const [statusUsuario, setStatusUsuario] = useState("");

  useEffect(() => {
    apiNecesitoLoginP().then((necesitoLogin) => {
      setStatusUsuario(necesitoLogin ? NECESITA_LOGIN : usuarioLeer());
    });
  }, []);

  if (statusUsuario == NECESITA_LOGIN) {
    return (
      <Login
        statusUsuario={statusUsuario}
        setStatusUsuario={setStatusUsuario}
      />
    );
  } else {
    return <AppBar rutas={Rutas} />;
  }
}
