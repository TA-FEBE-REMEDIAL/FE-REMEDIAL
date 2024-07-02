import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import "swiper/css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../utils/constants/endpoint";

const Slider = () => {
  const swiper = useSwiper();
  const [program, setProgram] = useState([]);

  useEffect(() => {
    getProgram();
  }, []);

  const getProgram = async () => {
    const url = `${ENDPOINTS.PROGRAM}`;
    const response = await axios.get(url);
    setProgram(response.data);
  };

  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {program.map((data, index) => (
          <SwiperSlide key={index}>
            <Col className="rounded-2">
              <img src={data.image} alt="" className="w-100 mb-5 rounded-top" />
              <div className="mb-5 px-3">
                <h5>{data.judul}</h5>
                <p className="m-0 text-secondary opacity-50">{data.kategori}</p>
              </div>
              <div className="mb-5 px-3">
                <p className="m-0 text-secondary fw-bold">Gratis</p>
                <Link to={`/program/detail-program/${data.id}`}>
                  <div className="d-grid gap-2 pb-3">
                    <button className="btn btn-outline-danger rounded-1 m-2">
                      Lihat Detail
                    </button>
                  </div>
                </Link>
              </div>
            </Col>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
