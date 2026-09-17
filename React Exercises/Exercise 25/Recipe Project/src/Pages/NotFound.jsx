import {useRouteError, Link} from "react-router-dom";
function NotFound() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className=" flex flex-col items-center justify-center h-screen">
            <h1 className=" text-2xl font-bold">Oops!</h1>
            <p className=" text-lg">Sorry, an unexpected error has occurred.</p>
            <p className=" text-muted-foreground">{error.statusText || error.message}</p>
            <Link to="/" className="inline-block p-2 mt-4 bg-rose-600 text-white rounded-lg shadow hover:bg-rose-700 transition">
                ← Back to Home
            </Link>
        </div>
    );
}
export default NotFound;