import { useContext } from "react";
import Header from "../Header";
import Footer from "../Footer";

import multiStepContext from "./MultiStepContext";
import { Radio } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/index.css";

function HealthChangesQuestion() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
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
                Question 1
              </h2>
            </Col>
          </Row>
          <Header />
          <Row className="align-items-end" style={{ marginBottom: "20px" }}>
            <Col xs={12}>
              In the past year, have you experienced any significant changes to
              your health affecting your ability to wear a respirator?
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
                    value="No"
                    checked={userData["question1"] === "No"}
                    onChange={(e) =>
                      setUserData({ ...userData, question1: e.target.value })
                    }
                    name="question1"
                    required
                  />
                  Yes
                  <Radio
                    checked={userData["question1"] === "Yes"}
                    value="Yes"
                    onChange={(e) =>
                      setUserData({ ...userData, question1: e.target.value })
                    }
                    name="question1"
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
                  color: "#FFFFFF",
                  backgroundColor: "#152456",
                  fontSize: "25px",
                  fontFamily: "museo-sans",
                  marginBottom: "25px",
                }}
                onClick={() => setStep(2)}
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
export default HealthChangesQuestion;
