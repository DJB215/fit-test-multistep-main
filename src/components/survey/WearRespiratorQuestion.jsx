import { useContext } from "react";

import Header from "../Header";
import Footer from "../Footer";
import multiStepContext from "./MultiStepContext";
import { Radio } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/index.css";

function WearRespiratorQuestion() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  console.log(userData);
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
                Question 3
              </h2>
            </Col>
          </Row>
          <Header />
          <Row className="align-items-end" style={{ marginBottom: "20px" }}>
            <Col xs={12}>
              In the past year, have you experienced any issues while wearing a
              respirator?
            </Col>
          </Row>
          <Row className="align-items-end" style={{ marginBottom: "20px" }}>
            <Col xs={12}>
              <div
                style={{
                  padding: "10px",
                  alignItems: "center",
                  fontSize: "50px",
                }}
              >
                <div style={{ fontSize: "20px" }}>
                  No
                  <Radio
                    onChange={(e) =>
                      setUserData({ ...userData, question3: e.target.value })
                    }
                    checked={userData["question3"] === "No"}
                    value="No"
                    name="question3"
                    required
                  />
                  Yes
                  <Radio
                    onChange={(e) =>
                      setUserData({ ...userData, question3: e.target.value })
                    }
                    checked={userData["question3"] === "Yes"}
                    value="Yes"
                    name="question3"
                    required
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-end" style={{ marginBottom: "25px" }}>
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
                onClick={() => setStep(2)}
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
                onClick={() => setStep(4)}
              >
                Next
              </button>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WearRespiratorQuestion;
