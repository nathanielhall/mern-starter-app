// import react from 'react'
// import { useApi} from ''

import { useApi } from "./api"


type Todo = {
	_id: number,
	action: string,
}

export const Application = () => {
	const [request, response] = useApi<Todo>('http://localhost:5000/todos')

	return (
		<div>
		{
			request.loading === false && !!response?.data && (
				<pre>{JSON.stringify(response.data, null, 2)}</pre>
			)
		}
		</div>
	)
}