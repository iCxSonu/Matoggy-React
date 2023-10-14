import { useRouteError } from "react-router-dom";

const Error = (() => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Opps!!!</h1>
            <h1>Something Went Wrong</h1>
            <h3>{err.data}</h3>
            <h3>{err.status}</h3>
            <h3>{err.statusText}</h3>
            
        </div>
    )
})

export default Error;