import React from 'react';
import Product from './Product';
// import bg from './img';

export default function Home() {
  return (
    <>
   {/* <div className="hero">
   <div className="card bg-dark text-white border-0" >
  <img className="card-img-top" src="/a4.jpg" alt="Background image" height="550px"/>
  <div className="card-img-overlay py-10 justify-content-center carousel-caption d-none d-md-block">
    <div className="container py-10">
      <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
    
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
    </div>
  </div>
</div>
</div> */}


<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/a4.jpg" class="d-block w-100" alt="bg1" />
      <div class="carousel-caption d-none d-md-block">
        <h5 className="card-title display-1 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
        <p className="card-text lead fs-1 py-10">CHECK OUT ALL THE TRENDS</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/a3.jpg" class="d-block w-100" alt="bg2" />
      <div class="carousel-caption d-none d-md-block">
        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/a5.jpg" class="d-block w-100" alt="bg3" />
      <div class="carousel-caption d-none d-md-block">
        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
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

<Product />
    </>
  );
}
