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
            <h4 className="d-flex justify-content-lg-start mb-3">
              Selamat Datang di
            </h4>
            <h1 className="d-flex justify-content-lg-start">
              <b>Program Remedial</b>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Seconde Slide" />
          <Carousel.Caption className="wrap-cars">
            <h1 className="d-flex justify-content-lg-start mb-3">
              <b>Remedial</b>
            </h1>
            <h6 className="text-left">
              Program Remedial adalah program gratis dari Serrum.id untuk murid
              SMA yang di dirikan pada tahun 2019. Ini bertujuan meningkatkan
              cara siswa mengonsumsi informasi dan pengetahuan terkini dengan
              pendekatan seni dan literasi.
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third Slide" />
          <Carousel.Caption className="wrap-cars">
            <h1 className="d-flex justify-content-lg-start mb-3">
              <b>Remedial.id</b>
            </h1>
            <h4 className="d-flex justify-content-lg-start">
              Untuk program seni lebih baik
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
