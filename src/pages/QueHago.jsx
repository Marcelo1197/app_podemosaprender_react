//INFO: un todo list filtrable por tengo teclado, tiempo disponible, etc.

import CheckboxList from '../components/todo_list';
import CheckboxFiltros from '../components/todo_filtros';
//TODO: reunir las partes, conectar para que filtre

export default function QueHago() {
	return (
		<>
			<CheckboxList />
			<CheckboxFiltros />
		</>
	)
}

