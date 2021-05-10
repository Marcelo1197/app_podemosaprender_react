//INFO: mostrar una charla

import { useParams } from 'react-router-dom';

export default function Charla() {
	let { charlaid } = useParams(); 
	//A: el router la pasa como paramentro tipo /charla/bandadjango -> bandadjango
	return (
		<>
			<h2>
				Charla { charlaid }
			</h2>
		</>
	)
}

