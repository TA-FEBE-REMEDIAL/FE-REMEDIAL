import ListKaryaComponent from "../components/ListKaryaComponent";

const KaryaPage = () => {
  return (
    <section className="container" style={{ paddingTop: "7rem" }}>
      <div className="row py-4">
        <h2 className="mt-3 fw-bold">Karya Siswa</h2>
        <h6 className="">
          Berbagai macam-macam karya seni yang di buat oleh beberapa siswa
        </h6>
        <hr />
        <br />
        <ListKaryaComponent />
      </div>
    </section>
  );
};

export default KaryaPage;
