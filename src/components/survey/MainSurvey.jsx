import { useContext } from "react";
import Confirmation from "./Confirmation";
import HealthChangesQuestion from "./HealthChangesQuestion";
import RespiratorDifficultyQuestion from "./RespiratorDifficultyQuestion";
import WearRespiratorQuestion from "./WearRespiratorQuestion";
import WeightQuestion from "./WeightQuestion";
import Success from "./Success";

import { Container } from "@mui/material";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import multiStepContext from "./MultiStepContext.jsx";
import "../../css/index.css";

function showStep(step) {
  console.log(step);
  switch (step) {
    case 1:
      return <HealthChangesQuestion />;
    case 2:
      return <WeightQuestion />;
    case 3:
      return <WearRespiratorQuestion />;
    case 4:
      return <RespiratorDifficultyQuestion />;
    case 5:
      return <Confirmation />;
    case 6:
      return <Success />;
  }
}

const MainSurvey = () => {
  const { currentStep } = useContext(multiStepContext);

  // assume the add was successful
  // hide the modal
  // make sure the list is updated appropriately

  return (
    <>
      <Container
        component="main"
        maxWidth="lg"
        style={{ marginTop: "130px", marginBottom: "50px" }}
      >
        <Stepper
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "35px",
            marginBottom: "50px",
          }}
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        {showStep(currentStep)}
      </Container>
    </>
  );
};

export default MainSurvey;
