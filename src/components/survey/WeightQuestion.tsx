import Stack from "@mui/material/Stack";
import { FormWrapper } from "./FormWrapper";
import Radio from "@mui/material/Radio";

type WeightQuestionData = {
  question2: string;
};

type WeightQuestionProps = WeightQuestionData & {
  updateFields: (fields: Partial<WeightQuestionData>) => void;
};

export function WeightQuestion({
  question2,
  updateFields,
}: WeightQuestionProps) {
  return (
    <FormWrapper title="Question 2">
      <Stack direction="column" spacing={2}>
        <div
          style={{
            padding: "10px",
            maxWidth: "500px",
            fontSize: "18px",
            justifyContent: "center",
          }}
        >
          In the past year, have you gained or lost 10 pounds?
        </div>
        <div
          style={{ padding: "10px", alignItems: "center", fontSize: "50px" }}
        >
          <div style={{ fontSize: "20px" }}>
            No
            <Radio
              checked={question2 === "No"}
              onChange={(e) => updateFields({ question2: e.target.value })}
              value="No"
              name="question2"
              required
            />
            Yes
            <Radio
              checked={question2 === "Yes"}
              onChange={(e) => updateFields({ question2: e.target.value })}
              value="Yes"
              name="question2"
              required
            />
          </div>
        </div>
      </Stack>
    </FormWrapper>
  );
}
