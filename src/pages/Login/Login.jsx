//INFO: pantalla de login en podemos aprender

import { useState, useEffect } from 'react';
import { apiLogin, apiNecesitoLoginP, fetchConToken, usuarioLeer } from '../../services/pa-api';

import CircularProgress from '@material-ui/core/CircularProgress';

import LoginTemplate from "./LoginTemplate"

export default function Login({setStatusUsuario}) {

	const [nombreUsuario, setNombreUsuario] = useState("")
	const [contraseniaUsuario, setContraseniaUsuario] = useState("")
	const [preLoader, setPreLoader] = useState(false)
	

	const handleChangeInputUsuario = (e) => {
		setNombreUsuario(e.target.value)
	}

	const handleChangeInputContrasenia = (e) => {
		setContraseniaUsuario(e.target.value)
	}
	
	const handleClickLogin = async (e) => {
		e.preventDefault();
		if (contraseniaUsuario == "" || nombreUsuario == "") {
      alert("Debe completar los dos campos");
    }
		else {
			setPreLoader(true)
			const res = await apiLogin(
				nombreUsuario,
				contraseniaUsuario
			);
			setPreLoader(false)

			if (res.detail === "No active account found with the given credentials") {
				alert("Usuario o contraseña incorrecto!");
			} else {
				setStatusUsuario(usuarioLeer())
			}
		}
	}

	return (
		preLoader
			? 
			<CircularProgress />
			:
			<LoginTemplate 
				onChangeUsuario={handleChangeInputUsuario} 
				onChangePass={handleChangeInputContrasenia} 
				onClickLogin={handleClickLogin}
			/>
	)	

	
}