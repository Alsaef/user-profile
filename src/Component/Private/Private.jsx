// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Private = ({children}) => {
    const {user,loding}=useContext(AuthContext)
    if (loding) {
       return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
  
    return <Navigate to='/login' replace={true}></Navigate>;
};

export default Private;