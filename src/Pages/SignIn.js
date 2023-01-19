import React from 'react';
import './main.css'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const SignIn = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  if(user){
    console.log('signIn with')
  }

const signInWithEmail = (event) => {
event.preventDefault();
const name = event.target.name.value;
const email = event.target.email.value;
const password = event.target.password.value;
console.log(name,email,password);
  createUserWithEmailAndPassword(email,password)

}

    return (
        <div>
           <div className='mainFormMaster'>
<form onSubmit={signInWithEmail} className='fromMaster form-control'>
    <h1 className='fs-4 text-center fw-bolder'>Sign In</h1>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Your Name</label>
    <input name='' type="text" class="form-control" placeholder='UserName' id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Email</label>
    <input name='email' type="email" class="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"required/>
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input name='password' type="password" class="form-control" placeholder='Password' id="exampleInputPassword" aria-describedby="emailHelp" required/>
    </div>

 <button className='formBtn' type="submit">Sign In</button><br></br>
 <p className='mt-2 ml-2'>Already Have an Account? pls <Link to="/login">Login</Link></p>
 <button onClick={() => signInWithGoogle()} className='signInGmail btn btn-primary '> <FcGoogle className='fcGail' />Sign in with email</button>

</form>
       </div> 
        </div>
    );
};

export default SignIn;