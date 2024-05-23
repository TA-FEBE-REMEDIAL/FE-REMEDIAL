import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import img1about from "../assets/img/about/about1.png";
import img2about from "../assets/img/about/about2.png";
import img3about from "../assets/img/about/about3.png";

function TentangKamiPage() {
  return (
    <Container>
      <section id="jumbroton">
        <div className="jumbroton-content top-nav aboutflex">
          <Row>
            <Col>
              <p className="m-0  opacity-50">Tentang Kami</p>
              <h2 className="fw-bold">Remedial.id</h2>
              <div className="text-about">
                <p>
                  Remedial merupakan kegiatan yang akan Serrum lakukan selama 1
                  tahun di 2019. Kegiatan ini melibatkan murid SMA (pilihan) di
                  Jakarta dan sekitarnya yang berfokus pada pola konsumsi
                  informasi dan pengetahuan berdasarkan perkembangan hari ini.
                  Dengan metode saling silang informasi yang menghasilkan
                  pengetahuan dan pendekatan seni dan literasi. Program ini
                  gratis.
                </p>
                <p>
                  Remedial adalah cara Serrum untuk berkomunikasi dengan murid
                  SMA hari ini dengan metode seni rupa dan literasi. Dengan
                  proses berdiskusi, berkreasi dan berapresiasi.
                </p>
              </div>
            </Col>
            <Col>
              <img
                src={img1about}
                alt=""
                style={{ width: 380, marginLeft: "10%" }}
              />
            </Col>
          </Row>
        </div>
        <hr />
        <div className="jumbroton-content top-nav pt-5">
          <Row>
            <Col xs={4}>
              <img
                src={img2about}
                alt=""
                style={{ width: 250, marginLeft: "5%" }}
              />
            </Col>
            <Col className="pt-5">
              <h2 className="fw-bold">Tujuan Kegiatan</h2>
              <div className="text-about">
                <ol>
                  <li>
                    Menggembangkan minat murid sesuai kemampuannya yang dimiliki
                  </li>
                  <li>
                    Pengetahuan tambahan di luar kegiatan belajar mengajar di
                    Sekolah.
                  </li>
                  <li>
                    Mengapresiasi proses berkarya murid sesuai minat dan
                    kemampuannya.
                  </li>
                  <li>
                    Mengajak untuk menggembangkan minat baca, tidak hanya yang
                    bersifat literasi namun kondisi dan situasi hari ini.
                  </li>
                  <li>
                    Mengenalkan perkembangan seni khususnya seni rupa hari ini.
                  </li>
                  <li>
                    Mengenal dan mengkritisi lebih jauh karakter diri melalui
                    pola konsumsi.
                  </li>
                  <li>Mencoba memformulasikan</li>
                </ol>
              </div>
            </Col>
          </Row>
        </div>
        <div className="jumbroton-content top-nav pt-5">
          <Row>
            <Col>
              <h2 className="fw-bold">Objektif</h2>
              <div className="text-about">
                <p>
                  Serrum sebagai organisasi yang memiliki fokus terhadap isu
                  pendidikan dan seni rupa perlu melakukan penggembangan
                  terhadap proses dan konsep yang telah Serrum lakukan selama
                  ini. Khususnya terhadap isu pendidikan melalui pendekatan seni
                  rupa. Kegiatan ini mencoba menggembangkan hal tersebut dan
                  berfokus dalam hal pola konsumsi pada murid SMA. Usia SMA
                  merupakan proses manusia untuk mengenal dan berupaya mencari
                  identitas. Dan kali ini, Serrum mencoba untuk menggali,
                  mengkritisi identitas tersebut secara bersama-sama.
                </p>
                <p>
                  Selain itu, percepatan arus informasi yang begitu deras
                  memberikan banyak sekali manfaat bagi kita. Serrum berupaya
                  memanfaatkan hal tersebut menjadi sebuah pengetahuan.
                </p>
                <p>
                  Sementara, paradigma seni rupa kontemporer hari ini yang
                  bersifat global juga melakukan praktik-praktik lintas disiplin
                  serta wacana dan metode yang terus berkembang. Di dalam
                  praktiknya, seni rupa kontemporer berusaha untuk terus
                  memberikan nilai-nilai sebagai penguat perannya di masyarakat.
                  Salah dua peran tersebut adalah informasi dan pengetahuan. Di
                  samping itu seni rupa kontemporer dapat menjadi metode untuk
                  mengkritisi dan memahami kondisi hari ini. Maka Serrum
                  menjadikan pendekatan seni sebagai sebuah cara untuk memahami
                  dan mengkritisi kondisi hari ini dan mencoba menjadikan
                  paradigma seni rupa kontemporer menjadi sebuah metode
                  pembelajaran yang bersifat eksperimentatif kepada murid SMA.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="jumbroton-content top-nav pt-5">
          <Row>
            <Col>
              <img
                src={img3about}
                alt=""
                style={{ width: 450, marginLeft: "5%" }}
              />
            </Col>
            <Col>
              <h2 className="fw-bold">Target Peserta</h2>
              <div className="text-about">
                <p>
                  Murid Sekolah Menengah Atas (SMA) Jakarta, Depok, Bekasi,
                  Tangerang Selatan & Bogor, dalam kurun usia 16-18 tahun.
                  Mengapa? Dalam usia 15-20 tahun, Seorang remaja akan mengalami
                  proses kemapanan atau pertumbuhan otak mencapai kesempurnaan
                  secara fungsional dengan gambaran sebagai berikut :
                </p>
                <ul>
                  <li>
                    Secara intelektual remaja mulai dapat berfikir logis tentang
                    gagasan abstrak.
                  </li>
                  <li>
                    Berfungsinya kegiatan kognitif yaitu membuat rencana,
                    strategi, membuat keputusan serta mampu memecahkan masalah
                  </li>
                  <li>Memiliki kemampuan nalar.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="jumbroton-content top-nav pt-5">
          <Row>
            <Col>
              <h2 className="fw-bold">Kesimpulan</h2>
              <div className="text-about">
                <p>
                  Remedial adalah cara Serrum untuk berkomunikasi dengan murid
                  SMA hari ini dengan metode seni rupa dan literasi. Dengan
                  proses berdiskusi, berkreasi dan berapresiasi.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Container>
  );
}

export default TentangKamiPage;
