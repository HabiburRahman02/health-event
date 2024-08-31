/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="text-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;