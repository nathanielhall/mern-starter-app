// import React, {FC} from 'react'
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// const queryClient = new QueryClient()

export const Application = () => {

  return(
    <span>Sigin Page</span>
  )
}

// type Todo = {
//   _id: number
//   action: string
// }

// export const Application = () => {
//   // TODO: Replace with react query
//   // const [request, response] = useApi<Todo>('')

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Example />
//     </QueryClientProvider>
//   )
// }

// const Example = () => {
//   const { isLoading, error, data } = useQuery(['repoData'], () =>
//     fetch('http://localhost:5000/').then((res) => res.json())
//   )

//   if (isLoading) return <Loading />

//   if (error) return <ErrorMessage error={error} />

//   return (
//     <div>
//       {isLoading === false && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   )
// }

// const Loading = () => {
//   return (
//     <span>{`Loading`}</span>
//   )
// }

// type ErrorMessageProps = {
//   error?: {message: string} 
// }
// const ErrorMessage: FC<ErrorMessageProps> = ({error}) => {
//   return (
//     <span>{`Error: ${error?.message}`}</span>
//   )
// }