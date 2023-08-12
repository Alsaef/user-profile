// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Interface = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
           <h2>User Info {user && <span> {user.email}</span>}
           </h2>
        </div>
    );
};

export default Interface;