import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';


const CheckAppoinment = () => {

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
 event.preventDefault();
     const name = event.target.name.value;
     const email = event.target.email.value;
     const location = event.target.location.value;
     const mobile = event.target.mobile.value;


fetch('https://doctorsakib.netlify.app/insertData', {
  method: 'POST',
  body: JSON.stringify({
   name,email,location,mobile
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  navigate('/booking');

  }
  
    return (
       <div className='mainFormMaster' >
<form onSubmit={handleFormSubmit} className='fromMaster form-control'>
    <h1 className='fs-4 text-center fw-bolder'>To Get Serial give the bellow Information</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Name</label>
    <input name='name' type="text" class="form-control" placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Email</label>
    <input name='email' type="email" class="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Address</label>
    <input name='location' type="text" class="form-control" placeholder='Address' id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
    <input name='mobile' type="text" class="form-control" placeholder='Mobile' id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>

 <button className='formBtn' type="submit"> Take Serial Here</button>

</form>
       </div>
    );
};

export default CheckAppoinment;