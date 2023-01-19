import React from 'react';
import './main.css'

import image1 from './../image/doctorSakib.jpg';

const About = () => {
    return (
        <div>
            {/* <a href="https://ibb.co/1XMzq9p"><img src="https://i.ibb.co/SmcfnK1/doctor-Sakib.jpg" alt="doctor-Sakib" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>picture hosting sites</a><br /> */}
            <div className='container '>
         <div  className='row about '>
            <div className='col-md-6'>
        <img className="rounded img-fluid" src='https://i.ibb.co/SmcfnK1/doctor-Sakib.jpg' alt="" />
            </div>
            <div className='col-md-6'>
       <h1 className='aboutText fs-1'>Hi i am Doctor Sakib</h1>
       <p className='aboutDes'>I medicine specalist . i give the service my patient too honestly . There are seacail offer for poor patient . i give free service for them . I am heart specailist . And the CEO of Mohakhali Genarel Hospital ,Dhaka ,Bangladesh.</p>
       <a className='btn btn-primary' target='_blank' href="https://www.facebook.com/mostafa.mohsin.5473">More About Me</a>
            </div>
         </div>
            </div>
        </div>
    );
};

export default About;