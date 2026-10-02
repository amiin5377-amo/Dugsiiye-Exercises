import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import {  useNavigate } from "react-router";

function ProtectedRoute ({element}) {
const {isAuthenticated} = useContext(AuthContext);
const navigate = useNavigate;
if(!isAuthenticated) {
return navigate('/login')
}
return element;
}

export default ProtectedRoute;
