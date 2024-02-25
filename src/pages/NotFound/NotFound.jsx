import { useRouteError } from "react-router"

function NotFound() {

  const error = useRouteError()
  console.log(error.data);

  return (
    <>
      <h2>NotFound....</h2>
      <div>{error.data}</div>
    </>
  )
}

export default NotFound