import Radio from "@mui/material/Radio";
import { FormWrapper } from "./FormWrapper";
import Stack from "@mui/material/Stack";

type WearRespiratorQuestionData = {
  question3: string;
};

type WearRespiratorQuestionProps = WearRespiratorQuestionData & {
  updateFields: (fields: Partial<WearRespiratorQuestionData>) => void;
};

export function WearRespiratorQuestion({
  question3,
  updateFields,
}: WearRespiratorQuestionProps) {
  return (
    <FormWrapper title="Question 3">
      <Stack direction="column" spacing={2}>
        <div
          style={{
            padding: "10px",
            maxWidth: "500px",
            fontSize: "18px",
            justifyContent: "center",
          }}
        >
          In the past year, have you experienced any issues while wearing a
          respirator?
        </div>
        <div
          style={{ padding: "10px", alignItems: "center", fontSize: "50px" }}
        >
          <div style={{ fontSize: "20px" }}>
            No
            <Radio
              checked={question3 === "No"}
              onChange={(e) => updateFields({ question3: e.target.value })}
              value="No"
              name="question3"
              required
            />
            Yes
            <Radio
              checked={question3 === "Yes"}
              onChange={(e) => updateFields({ question3: e.target.value })}
              value="Yes"
              name="question3"
              required
            />
          </div>
        </div>
      </Stack>
    </FormWrapper>
  );
}
