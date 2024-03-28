import { FormEvent, useState } from "react";
import { Confirmation } from "./Confirmation";
import { HealthChangesQuestion } from "./HealthChangesQuestion";
import { RespiratorDifficultyQuestion } from "./RespiratorDifficultyQuestion";
import { WearRespiratorQuestion } from "./WearRespiratorQuestion";
import { WeightQuestion } from "./WeightQuestion";
import { useMultistepForm } from "../../useMultistepForm";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

type FormData = {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
};

const INITIAL_DATA: FormData = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
};

const MainSurvey = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [test, setTest] = useState(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <HealthChangesQuestion {...data} updateFields={updateFields} />,
      <WeightQuestion {...data} updateFields={updateFields} />,
      <WearRespiratorQuestion {...data} updateFields={updateFields} />,
      <RespiratorDifficultyQuestion {...data} updateFields={updateFields} />,
      <Confirmation />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const navigate = useNavigate();
    if (!isLastStep) return next();

    if (
      data.question1 == "No" &&
      data.question2 == "No" &&
      data.question3 == "No" &&
      data.question4 == "No"
    ) {
      navigate("/success");
    } else {
      setTest(false);
    }
    fetch("http://127.0.0.1:5000/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        // assume the add was successful
        // hide the modal
        // make sure the list is updated appropriately
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <Container component="main" maxWidth="lg" style={{ marginTop: "130px" }}>
        <div
          style={{
            position: "relative",
            background: "white",
            border: "2px solid #8E9089",
            padding: "2rem",
            margin: "1rem",
            borderRadius: "20px",
            fontFamily: "Arial",
            width: "1019px",
            height: "476px",
          }}
        >
          <form>
            <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
              {currentStepIndex + 1}/{steps.length}
            </div>
            {step}
            <div
              style={{
                marginTop: "1rem",
                display: "block",
                gap: ".5rem",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {!isFirstStep && (
                <button
                  onClick={back}
                  style={{
                    borderRadius: "5px",
                    border: "1px solid #152456",
                    width: "200px",
                    height: "75px",
                    color: "#152456",
                    backgroundColor: "#FFFFFF",
                    fontSize: "25px",
                    fontFamily: "museo-sans",
                  }}
                >
                  Back
                </button>
              )}
              <button
                onClick={onSubmit}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #152456",
                  width: "200px",
                  height: "75px",
                  color: "#FFFFFF",
                  backgroundColor: "#152456",
                  fontSize: "25px",
                  fontFamily: "museo-sans",
                }}
              >
                {isLastStep ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default MainSurvey;
