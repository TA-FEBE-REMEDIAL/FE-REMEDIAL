import React from "react";
import ModalComponent from "./ModalComponent";
import { benefits } from "../data/keuntunganprogram";

function ProgramDetailComponent(props) {
  return (
    <>
      <div className="box-program">
        <div
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-offset="0"
          className="scrollspy-example"
          tabindex="0"
        >
          <div className="border-content" id="detail-program">
            <h5 className="isi-detailpro">DETAIL PROGRAM</h5>
            <section dangerouslySetInnerHTML={{ __html: props.detailpro }} />
          </div>

          <div className="border-content my-4">
            <h5>METODE PEMBELAJARAN</h5>
            <h1 id="metode-pembelajaran">
              Berikut metode pembelajaran yang kami gunakan untuk program ini
            </h1>
            <div className="methods">
              <div className="method">
                <h3>Mentor-led Learning</h3>
                <p>
                  Pembelajaran yang dibimbing oleh mentor melalui video
                  conference, dan dilakukan secara synchronous
                </p>
                <ModalComponent
                  btn="Lihat Selengkapnya"
                  title="Mentor-led Learning"
                  body="Pembelajaran yang dibimbing oleh mentor melalui video
                  conference, dan dilakukan secara synchronous"
                />
              </div>
              <div className="method">
                <h3>Peer-learning & Self-learning</h3>
                <p>
                  Proses belajar mandiri secara asynchronous menggunakan kelas
                  online di Remedial berupa materi pembelajaran dan video
                  pembelajaran.
                </p>
                <ModalComponent
                  btn="Lihat Selengkapnya"
                  title="Peer-learning & Self-learning"
                  body="Proses belajar mandiri secara asynchronous menggunakan kelas online di Remedial berupa materi pembelajaran dan video pembelajaran."
                />
              </div>
            </div>
          </div>

          <div className="border-content">
            <h5>KEUNTUNGAN PROGRAM</h5>
            <h1 id="keuntungan-program">
              Apa yang akan kamu dapatkan dari program ini?
            </h1>
            <div className="benefits-container">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramDetailComponent;
