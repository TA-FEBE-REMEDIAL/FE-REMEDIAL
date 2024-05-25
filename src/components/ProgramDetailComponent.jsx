import React from "react";
import ModalComponent from "./ModalComponent";
import { benefits } from "../data/keuntunganprogram";

function ProgramDetailComponent() {
  return (
    <>
      <div className="box-program">
        <div
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-offset="0"
          class="scrollspy-example"
          tabindex="0"
        >
          <div className="border-content">
            <h5 className="isi-detailpro">DETAIL PROGRAM</h5>
            <h1 id="detail-program">
              Skilvul #Tech4Impact Kampus Merdeka Cycle 4: Front-End Web
              Development
            </h1>
            <div className="container">
              <p>
                Program Studi Independen Skilvul #Tech4Impact: Front-end Web
                Development terdiri atas pembelajaran individu dan proyek akhir
                yang dilakukan dalam tim. Tim yang terbentuk merupakan gabungan
                antara mahasiswa terpilih Skilvul #Tech4Impact Front-End Web
                Development dan Back-End Web Development. Pembelajaran model
                campuran (blended learning model) digunakan dalam program
                Skilvul #Tech4Impact: Front-End Web Development yang merupakan
                kombinasi dari belajar mandiri (self-learning), belajar kelompok
                (peer-learning), dan mentor-led learning:
              </p>
              <p>
                <span>Mentor-led Learning </span>Pembelajaran yang dibimbing
                oleh mentor melalui video conference, dan dilakukan secara
                synchronous. Mentor-led learning terbagi menjadi dua (2) tipe:
              </p>
              <ul>
                <li>Live Webinar (lecture)</li>
                <li>Mentoring: konsultasi dengan mentor fasilitator</li>
                <li>Belajar Kelompok (peer-learning) Proses</li>
              </ul>
              <p>
                <span>Belajar Mandiri (self-learning) </span>Proses belajar
                mandiri secara asynchronous menggunakan materi kelas online di
                Skilvul berupa video pembelajaran, kuis, dan latihan coding
                menggunakan teknologi Skilvul Playground.
              </p>
              <p>
                Pada proses persiapan, melalui proses matchmaking berdasarkan
                peminatan pada suatu bidang tantangan/challenge, peserta akan
                membentuk tim yang terdiri atas peserta front-end web
                development dan back-end web development Skilvul #Tech4Impact.
                Setiap kelompok akan dibimbing oleh para mentor profesional yang
                berpengalaman di bidangnya untuk mengembangkan solusi digital
                sebagai proyek akhir dari tantangan yang diberikan oleh
                Challenge Partner Skilvul.
              </p>
            </div>
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
