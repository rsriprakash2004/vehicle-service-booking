import React from "react";
import "./HomePage.css";
import { Container, Col, Image, Row, Button } from "react-bootstrap";
import MySkodaFooter from "../../components/MySkodaFooter/MySkodaFooter";
import bmwcar from "../../assets/img/bmw-car.jpg";
import bmwlogo from "../../assets/img/bmw-logo.png";
import chevronRight from "../../assets/img/chevron-right.png";
import { useHistory, Link } from "react-router-dom";

const HomePage = () => {
  let history = useHistory();

  return (
    <div className="p-home-page">
      <Container className="main">
        <Row>
          <Col className="home-column" xs={12} md={8} lg={7}>
            <Link className="mb-2" to="./">
              <span className="home-label">
                my<span className="letter-green">BMW</span>
              </span>
            </Link>
            <Image className="home-img" src={bmwcar} rounded />
          </Col>
          <Col
            className="home-column"
            xs={12}
            md={4}
            lg={{ span: 4, offset: 1 }}
          >
            <Image className="logo" src={bmwlogo} rounded />
            <h4 className="home-subtitle">Welcome to My BMW service!</h4>
            <p className="home-text">
              my BMW gives you access to all the digital services from BMW.
              Access important vehicle data, manage your data, and set up
              services.
            </p>
            <Button
              className="home-button"
              variant="success"
              onClick={() => {
                history.push("./login");
              }}
            >
              Let's Drive
              <Image src={chevronRight} />
            </Button>
          </Col>
        </Row>
      </Container>
      <MySkodaFooter />
    </div>
  );
};
export default HomePage;
