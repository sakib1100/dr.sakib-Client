import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { IoIosLogOut } from 'react-icons/io';
import { HiLogin } from 'react-icons/hi';
import '../Pages/main.css';


const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);

};
    return (
        <div>   
  <nav class="navbar fixed navbar-expand-lg">
  <div class="container">
    <Link class="navbar-brand" to="/home">Dr. Sakib's Chamber</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/home" class="nav-link active" aria-current="page" href="#">Home</Link>
        <Link to="/about" class="nav-link font-bold" aria-current="page" href="#">About</Link>
        <Link to="/booking" class="nav-link " aria-current="page" href="#">Booking</Link>
       {
        user ? <Link to="/login" class="nav-link signIn" onClick={logOut} aria-current="page" href="#">SignOut <IoIosLogOut className='ioIosLogOut' /></Link>
        :  <Link to="/login" class="nav-link signIn" aria-current="page" href="#">Login <HiLogin className='ioIosLogOut' /></Link>
       }
       
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;