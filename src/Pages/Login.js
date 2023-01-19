import React from 'react';
import './main.css'
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from  = location.state?.from?.pathname || '/';
  if (user || Guser) {
    navigate(from, {replace: true });
  
  }
  const signInWithEmail = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);
    signInWithEmailAndPassword(email,password)
    
    }

    return (
        <div>
           <div className='mainFormMaster' >
<form onSubmit={signInWithEmail} className='fromMaster form-control'>
    <h1 className='fs-4 text-center fw-bolder'>Login</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Email</label>
    <input name='email' type="email" class="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input name='password' type="password" class="form-control" placeholder='password' id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>

 <button className='formBtn' type="submit">Login</button><br></br>
 <p className='mt-2 ml-2'>New To pls <Link to="/signIn">Sign In</Link></p>
 <button  onClick={() => signInWithGoogle()} className='signInGmail btn btn-primary '> <FcGoogle className='fcGail' />Sign in with email</button>

</form>
       </div> 
        </div>
    );
};

export default Login;