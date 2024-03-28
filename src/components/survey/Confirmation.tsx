import { FormWrapper } from "./FormWrapper";

export function Confirmation() {
  return (
    <FormWrapper title="Confirmation">
      <p>
        Please make sure you've answered all 4 questions accurately before
        submitting.
      </p>
      <p>Once submitted, your survey will be reviewed internally.</p>
    </FormWrapper>
  );
}
