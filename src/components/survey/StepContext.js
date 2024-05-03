import { createContext } from "react";

// Define the default values for the context in plain JavaScript
const defaultValues = {
  currentStep: 1,
  setStep: () => {},
  userData: {},
  setUserData: () => {},
};

const multiStepContext = createContext(defaultValues);

export default multiStepContext;
