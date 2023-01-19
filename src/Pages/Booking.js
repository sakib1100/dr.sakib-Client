import React, { useEffect, useState } from 'react';
import './../Pages/main.css'


const Booking = () => {
    const [count, setCount] = useState(0);

const [show,setShow] = useState([]);
useEffect(() => {
    fetch('https://doctorsakib.netlify.app/insertData')
    .then((response) => response.json())
    .then((json) => setShow(json));
  
},[])


const handleDelete = id => {
    const proceed = window.confirm('Are you sure want to delete this product?');
    if(proceed){
      const url  = `https://doctorsakib.netlify.app/DeleteData/${id}`;
      fetch(url,{
         method : 'DELETE'
      })
     .then(res => res.json())
     .then(datas => {
             if(datas.deletedCount > 0){
              console.log('deleted');
              const remaining = show.filter(ur => ur._id !== id);
              setShow(remaining);
             }
     })
    }
  }
    return (
<div className='container '>
<table class="mostafa table table-striped">
            <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
      <th scope="col">Mobile</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
{
    show.map(pd =><tbody index  key={pd._id} pd={pd}>
        <tr>
          <th scope="row">*</th>
          <td>{pd.name}</td>
          <td>{pd.email}</td>
          <td>{pd.location}</td>
          <td>{pd.mobile}</td>
          <td><button onClick={() => handleDelete(pd._id)} className='btn btn-sm btn-danger'>Delete</button></td>
        </tr>
        
      </tbody>)
}

</table>

        </div>
    );
};

export default Booking;