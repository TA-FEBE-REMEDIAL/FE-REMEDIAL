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
          className="scrollspy-example"
          tabindex="0"
        >
          <div className="border-content">
            <h5 className="isi-detailpro">DETAIL PROGRAM</h5>
            <h1 id="detail-program">
              Literary Forge: Program Remedial Seni Sastra
            </h1>
            <div className="container">
              <p>
                Literary Forge adalah program pembelajaran digital yang
                dirancang khusus untuk meningkatkan pemahaman dan keterampilan
                dalam seni sastra. Program ini berfungsi sebagai remedial bagi
                siswa atau individu yang ingin memperdalam pemahaman mereka
                tentang karya sastra klasik maupun modern, serta mengasah
                kemampuan analisis sastra dan menulis kreatif. Pembelajaran
                model campuran (blended learning model) digunakan dalam program
                Remedial Literary Forge yang merupakan kombinasi dari belajar
                mandiri (self-learning), belajar kelompok (peer-learning), dan
                mentor-led learning:
              </p>
              <p>
                <span>Tujuan Program: </span>
              </p>
              <ul>
                <li>
                  Peningkatan Keterampilan Menulis: Membantu peserta
                  mengembangkan kemampuan menulis kreatif dan akademis melalui
                  latihan terfokus dan umpan balik konstruktif dari instruktur
                  berpengalaman.
                </li>
                <li>
                  Analisis Karya Sastra: Melatih peserta dalam teknik analisis
                  sastra yang mendalam, memungkinkan mereka untuk mengeksplorasi
                  tema, gaya, dan struktur berbagai genre sastra.
                </li>
                <li>
                  Penghargaan Terhadap Sastra: Mendorong peserta untuk
                  mengapresiasi kekayaan dan keragaman sastra dari berbagai
                  budaya dan periode waktu, serta memahami relevansinya dalam
                  konteks modern.
                </li>
                <li>
                  Pengembangan Kritis: Memupuk kemampuan berpikir kritis dan
                  reflektif peserta melalui diskusi kelompok.
                </li>
              </ul>
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
                mandiri secara asynchronous menggunakan kelas online di Remedial
                berupa materi pembelajaran dan video pembelajaran.
              </p>
              <p>
                Pada proses persiapan, melalui proses matchmaking berdasarkan
                peminatan pada suatu bidang tantangan/challenge, peserta akan
                membentuk tim yang terdiri atas peserta sesuai dengan program
                yang mereka pilih. Setiap kelompok akan dibimbing oleh para
                mentor profesional yang berpengalaman di bidangnya untuk
                mengembangkan solusi digital sebagai proyek akhir dari tantangan
                yang diberikan oleh Challenge Program Remedial.
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
