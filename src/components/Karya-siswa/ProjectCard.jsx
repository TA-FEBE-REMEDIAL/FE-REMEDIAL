import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProjectEditModal from "./ProjectEditModal";
// import {data} from "../../data/project";

const ProjectCard = () => {
  const [modalShow, setModalShow] = useState(false);
  // const [project, setProject] = useState("");

  const project = [
    {
      title: "Puisi Indah",
      category: "Sastra",
      name: "Siswa A",
      date: "2024-06-12",
      image: "https://via.placeholder.com/150",
      poem: "Ini adalah puisi indah yang dibuat oleh Siswa A...",
      reviewScore: 95,
    },
  ];

  const data = project[0];

  return (
    <>
      {/* {data.map((data,index)) {
      
    }} */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {data.category}
          </Card.Subtitle>
          <Card.Text>{data.poem}</Card.Text>
          <Card.Text>
            <strong>Nama:</strong> {data.name}
          </Card.Text>
          <Card.Text>
            <strong>Tanggal Penerbit:</strong> {data.date}
          </Card.Text>
          <Card.Text>
            <strong>Nilai:</strong> {data.reviewScore}
          </Card.Text>
          <Button variant="danger" onClick={() => setModalShow(true)}>
            Edit
          </Button>
        </Card.Body>
      </Card>

      <ProjectEditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={data}
      />
    </>
  );
};

export default ProjectCard;
