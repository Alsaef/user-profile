// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {user,createUser}=useContext(AuthContext)
    console.log(createUser)
    const handelSubmit=(event)=>{
        event.preventDefault();
        const name= event.target.name.value;
        const email= event.target.email.value;
        const password=event.target.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then((result)=>{
          const users=result.user
          console.log(users)
          event.target.reset()
        }) 
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div>
               <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Login Our Master Plan WebSite</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name='name' placeholder="User Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className='px-2'>Already Have a Account<Link className='btn btn-active btn-link' to='/login'>Login</Link></p>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;