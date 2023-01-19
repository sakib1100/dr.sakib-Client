import React, { useEffect, useState } from 'react';
import Services from './Services';

const Service = () => {
    const [appoints,setApoint] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setApoint(data))
    },[])

    return (
        <div className='container text-center my-5'>
            <h3 className='mt-5 fs-bold fs-2 fw-bolder my-4  text-center appoint'>Get Appointment</h3>

            <div className='row justify-content-sm-center mx-3'>
                {
                    appoints.map(appoint=><Services
                         key={appoint.id} 
                         appoint={appoint}
                         
                         ></Services>)
                }
                </div>
        </div>
    );
};

export default Service;