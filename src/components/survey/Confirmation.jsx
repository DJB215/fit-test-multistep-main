import { useContext } from "react";

import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import multiStepContext from "./MultiStepContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/index.css";

export default function Confirmation() {
  const { setStep } = useContext(multiStepContext);

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
          <Row style={{ marginBottom: "20px" }} key="confirmation-title">
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
                Confirmation
              </h2>
            </Col>
          </Row>
          <Header key="confirmation-header" />
          <Row
            className="align-items-end"
            style={{ marginBottom: "20px" }}
            key="confirmation-text"
          >
            <Col xs={12}>
              <p>
                Please make sure you've answered all 4 questions accurately
                before submitting.
              </p>
              <p>Once submitted, your survey will be reviewed internally.</p>
            </Col>
          </Row>

          <Row
            className="align-items-end"
            style={{ marginBottom: "25px" }}
            key="confirmation-buttons"
          >
            <Col xs={12}>
              <button
                style={{
                  borderRadius: "5px",
                  border: "1px solid #152456",
                  width: "200px",
                  height: "75px",
                  color: "#152456",
                  backgroundColor: "#ffffff",
                  fontSize: "25px",
                  fontFamily: "museo-sans",
                  marginBottom: "25px",
                }}
                onClick={() => setStep(4)}
              >
                Back
              </button>
              <button
                style={{
                  borderRadius: "5px",
                  border: "1px solid #152456",
                  width: "200px",
                  height: "75px",
                  color: "#FFFFFF",
                  backgroundColor: "#152456",
                  fontSize: "25px",
                  fontFamily: "museo-sans",
                  marginBottom: "25px",
                }}
                onClick={() => setStep(6)}
              >
                Submit
              </button>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </>
  );
}
