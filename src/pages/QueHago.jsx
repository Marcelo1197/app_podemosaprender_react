//INFO: un todo list filtrable por tengo teclado, tiempo disponible, etc.
import React, { useState, useEffect } from 'react'

import CheckboxList from '../components/todo_list';
import CheckboxFiltros from '../components/todo_filtros';
import { ListaTareasQueHago } from '../components/ListaTareasQueHago';

//TODO: reunir las partes, conectar para que filtre

export default function QueHago() {

	const [state, setState] = React.useState({
		escribir: true,
		wifi: true,
		pensar: true,
	});

	return (
		<>
			<CheckboxList />
			<CheckboxFiltros setState={setState} state={state}/>
			<ListaTareasQueHago state={state}/>
		</>
	)
}

