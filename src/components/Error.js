import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Opps!!....</h1>
            <h3>Something Went Wrong</h3>
            <h5>{err.status} : {err.statusText}</h5>
        </div>
    )
}

export default Error;