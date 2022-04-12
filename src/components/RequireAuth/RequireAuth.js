import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useFirebase from "../../hooks/useFirebase";
import { useAuthState } from 'react-firebase-hooks/auth'



const RequireAuth = ({ children }) => {
    const location = useLocation()
    const [user] = useAuthState(auth)

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }


    return children;
};

export default RequireAuth;