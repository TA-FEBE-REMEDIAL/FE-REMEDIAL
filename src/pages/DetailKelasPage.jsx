import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JumbrotonComponent from "../components/JumbrotonComponent";
import KelasComponent from "../components/KelasComponent";

function DetailKelasPage() {
  return (
    <Container className="top-nav pb-5">
      <JumbrotonComponent />
      <section id="isi-kelas">
        <Row className="pt-5">
          <Col xs={8}>
            <h1>LOREM LOREM </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              minus aspernatur, placeat autem, perferendis vero libero eveniet,
              adipisci excepturi nam amet necessitatibus dignissimos quos vel
              similique ea incidunt id corrupti!
            </p>
            <h1>LOREM LOREM </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              minus aspernatur, placeat autem, perferendis vero libero eveniet,
              adipisci excepturi nam amet necessitatibus dignissimos quos vel
              similique ea incidunt id corrupti!
            </p>
            <h1>LOREM LOREM </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              minus aspernatur, placeat autem, perferendis vero libero eveniet,
              adipisci excepturi nam amet necessitatibus dignissimos quos vel
              similique ea incidunt id corrupti!
            </p>
            <h1>LOREM LOREM </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              minus aspernatur, placeat autem, perferendis vero libero eveniet,
              adipisci excepturi nam amet necessitatibus dignissimos quos vel
              similique ea incidunt id corrupti!
            </p>
          </Col>

          <Col xs={4}>
            <iframe
              width="350"
              height="200"
              src="https://www.youtube.com/embed/VV13G4g3ZhM?si=BzVSTou-epYyazJL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <hr />
        <Row className="pt-5">
          <Col>
            <KelasComponent
              title="Kelas Rekomendasi Untuk Kamu"
              hidden="d-none"
            />
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default DetailKelasPage;
