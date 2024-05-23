import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/img/header/img1.png";
import img2 from "../assets/img/header/img2.png";
import img3 from "../assets/img/header/img3.png";

function CarouselComponent() {
  return (
    <div>
      <Carousel controls={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First Slide" />
          <Carousel.Caption className="wrap-cars">
            <h4 className="d-flex justify-content-lg-start">
              Selamat Datang di
            </h4>
            <h1 className="d-flex justify-content-lg-start">
              <b>Program Remedial.</b>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Seconde Slide" />
          <Carousel.Caption className="wrap-cars">
            <h4 className="d-flex justify-content-lg-start">
              Selamat Datang di
            </h4>
            <h1 className="d-flex justify-content-lg-start">
              <b>Program Remedial.</b>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third Slide" />
          <Carousel.Caption className="wrap-cars">
            <h4 className="d-flex justify-content-lg-start">
              Selamat Datang di
            </h4>
            <h1 className="d-flex justify-content-lg-start">
              <b>Program Remedial.</b>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
