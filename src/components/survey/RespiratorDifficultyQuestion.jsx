import React, { useContext } from "react";
import { Radio } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import Footer from "../Footer";
import multiStepContext from "./MultiStepContext.jsx";
import "../../css/index.css";

function RespiratorDifficultyQuestion() {
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
                Question 4
              </h2>
            </Col>
          </Row>
          <Header />
          <Row className="align-items-center" style={{ marginBottom: "20px" }}>
            <Col xs={12}>
              <p>
                In the past year, have there been changes in your work duties
                that have made wearing a respirator during work more difficult?
              </p>
            </Col>
          </Row>
          <Row className="align-items-center" style={{ marginBottom: "20px" }}>
            <Col xs={12}>
              <div style={{ padding: "10px" }}>
                <Radio
                  onChange={(e) =>
                    setUserData({ ...userData, question4: e.target.value })
                  }
                  checked={userData["question4"] === "No"}
                  value="No"
                  name="question4"
                  required
                />
                No
                <Radio
                  onChange={(e) =>
                    setUserData({ ...userData, question4: e.target.value })
                  }
                  checked={userData["question4"] === "Yes"}
                  value="Yes"
                  name="question4"
                  required
                />{" "}
                Yes
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
                  marginRight: "50px",
                }}
                onClick={() => setStep(3)}
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
                onClick={() => setStep(5)}
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

export default RespiratorDifficultyQuestion;
