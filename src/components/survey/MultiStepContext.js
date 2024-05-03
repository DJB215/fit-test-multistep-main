import { createContext } from "react";

const multiStepContext = createContext({
  currentStep: 1,
  setStep: () => {},
  userData: [],
  setUserData: () => {},
  finalData: [],
  setFinalData: () => {},
  submitData: () => {},
});

export default multiStepContext;
