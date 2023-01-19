import React from 'react';
import image1 from './../image/pexels-pavel-danilyuk-7108234.jpg'
import image2 from './../image/pexels-pixabay-356040.jpg'
import image3 from './../image/pexels-vidal-balielo-jr-3376799.jpg'
import About from './About';
import Service from './Service';

const Home = () => {
    return (
        <div>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="d-none carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src='https://i.ibb.co/5BrPzsX/pexels-pavel-danilyuk-7108234.jpg' style={{"height":"570px", "backgroundSize":"cover"}} class="d-block  w-100" alt="..." />
      <div class="carousel-caption  d-md-block">
        <h1 className='fs-1 fw-bold'>This is Dr. Sakib's Chamber</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src='https://i.ibb.co/8x940KV/pexels-pixabay-356040.jpg' style={{"height":"570px", "backgroundSize":"cover"}} class="d-block w-100" alt="..." />
      <div class="carousel-caption  d-md-block">
      <h1 className='fs-1 fw-bold text-primary '>This is Dr. Sakib's Chamber</h1>
    <button className='btn btn-primary'>Details</button>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src='https://i.ibb.co/txBWnGC/pexels-vidal-balielo-jr-3376799.jpg' style={{"height":"570px", "backgroundSize":"cover"}} class="d-block w-100" alt="..." />
      <div class="carousel-caption margin-top-40  d-md-block">
      <h1 className='fs-1 fw-bold'>This is Dr. Sakib's Chamber</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<About />

<Service />

        </div>
    );
};

export default Home;