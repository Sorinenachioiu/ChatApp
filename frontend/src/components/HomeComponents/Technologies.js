import React from "react";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import photo1 from "../../resources/MainPage/react.png";
import photo2 from "../../resources/MainPage/nodejs.png";
import photo3 from "../../resources/MainPage/firebase.png";

const Technologies = () => {
  return (
    <div
      style={{
        background: "#212539",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center the "Yes" text vertically
        alignItems: "center", // Center the "Yes" text horizontally
        color: "#F5F5DC",
      }}
    >
      <CardGroup style={{ height: "25rem", width: "100%" }}>
        <Card bg="dark" style={{ width: "auto", color: "#F5F5DC" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Frontend</Card.Title>
            <img alt="react" src={photo1} style={{ width: "10rem" }} />
          </Card.Body>
        </Card>
        <Card bg="dark" style={{ width: "auto", color: "#F5F5DC" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Backend</Card.Title>
            <img alt="nodejs" src={photo2} style={{ width: "10rem" }} />
          </Card.Body>
        </Card>
        <Card bg="dark" style={{ width: "auto", color: "#F5F5DC" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Backend</Card.Title>
            <img alt="fireabse" src={photo3} style={{ width: "10rem" }} />
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Technologies;
