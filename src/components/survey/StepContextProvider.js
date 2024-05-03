import React, { useState } from "react";
import MultiStepContext from "./MultiStepContext";
import MainSurvey from "./MainSurvey";

const StepContextProvider = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData() {
    setFinalData([...finalData, userData]);
    setUserData([]);
  }

  return (
    <MultiStepContext.Provider
      value={{
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      <MainSurvey />
    </MultiStepContext.Provider>
  );
};

export default StepContextProvider;
