import { useApi } from '@nathanielhall/useapi'

type Todo = {
  _id: number
  action: string
}

export const Application = () => {
  // TODO: Replace with react query
  const [request, response] = useApi<Todo>('http://localhost:5000/signin')

  return (
    <div>
      {request.loading === false && !!response?.data && (
        <pre>{JSON.stringify(response.data, null, 2)}</pre>
      )}
    </div>
  )
}
