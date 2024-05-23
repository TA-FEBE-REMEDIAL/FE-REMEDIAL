import React from "react";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import img1program from "../assets/img/program/5.png";
import img2program from "../assets/img/program/6.png";
import img3program from "../assets/img/program/7.png";
import img4program from "../assets/img/program/8.png";
import "swiper/css";

const Slider = () => {
  // const slides = [
  //   {
  //     image: "https://picsum.photos/200/300",
  //     title: "This is a title 1",
  //     description: "This is a description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/600/500",
  //     title: "This is a second title 2",
  //     description: "This is a second description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 3",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 4",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 5",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 6",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 7",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 8",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 9",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 11",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 12",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 13",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  //   {
  //     image: "https://picsum.photos/700/600",
  //     title: "This is a third title 14",
  //     description: "This is a third description",
  //     clickEvent: "sliderClick",
  //   },
  // ];
  const swiper = useSwiper();
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          <Col className="rounded-2">
            <img src={img1program} alt="" className="w-100 mb-5 rounded-top" />
            <div className="mb-5 px-3">
              <h5>Artistry Accelerator: Program Remedial Seni Rupa</h5>
              <p className="m-0 text-secondary opacity-50">Seni Rupa</p>
            </div>
            <div className="mb-5 px-3">
              <p className="m-0 text-secondary fw-bold">Gratis</p>
              <div className="d-grid gap-2 pb-3">
                <button className="btn btn-outline-danger rounded-1 m-2">
                  Lihat Detail
                </button>
              </div>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="rounded-2">
            <img src={img2program} alt="" className="w-100 mb-5 rounded-top" />
            <div className="mb-5 px-3">
              <h5>Melody Mastery: Program Remedial Seni Musik</h5>
              <p className="m-0 text-secondary opacity-50">Seni Musik</p>
            </div>
            <div className="mb-5 px-3">
              <p className="m-0 text-secondary fw-bold">Gratis</p>
              <div className="d-grid gap-2 pb-3">
                <button className="btn btn-outline-danger rounded-1 m-2">
                  Lihat Detail
                </button>
              </div>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="rounded-2">
            <img src={img3program} alt="" className="w-100 mb-5 rounded-top" />
            <div className="mb-5 px-3">
              <h5>Literary Forge: Program Remedial Seni Sastra</h5>
              <p className="m-0 text-secondary opacity-50">Seni Sastra</p>
            </div>
            <div className="mb-5 px-3">
              <p className="m-0 text-secondary fw-bold">Gratis</p>
              <div className="d-grid gap-2 pb-3">
                <button className="btn btn-outline-danger rounded-1 m-2">
                  Lihat Detail
                </button>
              </div>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="rounded-2">
            <img src={img4program} alt="" className="w-100 mb-5 rounded-top" />
            <div className="mb-5 px-3">
              <h5> Stagecraft Intensive: Program Remedial Pertunjukan</h5>
              <p className="m-0 text-secondary opacity-50">Seni Pertunjukan</p>
            </div>
            <div className="mb-5 px-3">
              <p className="m-0 text-secondary fw-bold">Gratis</p>
              <div className="d-grid gap-2 pb-3">
                <button className="btn btn-outline-danger rounded-1 m-2">
                  Lihat Detail
                </button>
              </div>
            </div>
          </Col>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
