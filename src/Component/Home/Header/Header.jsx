// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
  const {user,SingOutUser}=useContext(AuthContext)
  const handelLogOut=()=>{
    SingOutUser()
    .then(()=>{
      alert("SingOut")
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
    return (
        <div>
          <div className="navbar bg-primary text-primary-content">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">Master Plan</a>
    <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>
    <Link className="btn btn-ghost normal-case text-xl"  to='/order'>Orders</Link>
    {  user?
     <>
      <span>{user.email}</span>
      <button onClick={handelLogOut} className="btn btn-outline btn-error ms-2">LogOut</button>
     </>:
     <Link  className="btn btn-outline btn-success" to='/login'>Login</Link>
    }
  </div>
</div>

        </div>
    );
};

export default Header;