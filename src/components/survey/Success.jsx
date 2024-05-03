import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/index.css";
import check from "../../assets/check.png";

const Success = () => {
  return (
    <>
      <div className="mainForm">
        <div
          style={{
            marginTop: "1rem",
            display: "block",
            gap: ".5rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #152456",
            borderRadius: "20px",
          }}
        >
          <Row style={{ marginBottom: "20px" }}>
            <Col xs={12}>
              <h2
                className="title"
                style={{
                  textAlign: "center",
                  marginBottom: "25px",
                  marginTop: "50px",
                  fontSize: "50px",
                  fontFamily: "museo-sans",
                  fontWeight: "700",
                  fontStyle: "normal",
                  color: "#152456",
                }}
              >
                Success
              </h2>
            </Col>
          </Row>
          <Header />
          <Row className="align-items-end" style={{ marginBottom: "20px" }}>
            <Col xs={12}>
              <img
                src={check}
                alt="Check"
                style={{ display: "block", margin: "0 auto" }}
              />
              <p style={{ marginTop: "30px" }}>
                Your survey has been successfully submitted.
              </p>
              <p>Use the link below to schedule your fit test.</p>
              <Link to="/appointments">
                <button
                  style={{
                    borderRadius: "5px",
                    border: "1px solid #152456",
                    width: "300px",
                    height: "75px",
                    color: "#FFFFFF",
                    backgroundColor: "#152456",
                    fontSize: "25px",
                    fontFamily: "museo-sans",
                    marginBottom: "25px",
                  }}
                >
                  Schedule Your Fit Test
                </button>
              </Link>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Success;
