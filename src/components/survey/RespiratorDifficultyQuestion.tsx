import { Radio, Stack } from "@mui/material";
import { FormWrapper } from "./FormWrapper";

type RespiratorDifficultyQuestionData = {
  question4: string;
};

type RespiratorDifficultyQuestionProps = RespiratorDifficultyQuestionData & {
  updateFields: (fields: Partial<RespiratorDifficultyQuestionData>) => void;
};

export function RespiratorDifficultyQuestion({
  question4,
  updateFields,
}: RespiratorDifficultyQuestionProps) {
  return (
    <FormWrapper title="Question 4">
      <Stack direction="column" spacing={2}>
        <div
          style={{
            padding: "10px",
            maxWidth: "500px",
            fontSize: "18px",
            justifyContent: "center",
          }}
        >
          In the past year, have there been changes in your work duties that
          have made wearing a respirator during work more difficult?
        </div>
        <div
          style={{ padding: "10px", alignItems: "center", fontSize: "50px" }}
        >
          <div style={{ fontSize: "20px" }}>
            No
            <Radio
              checked={question4 === "No"}
              onChange={(e) => updateFields({ question4: e.target.value })}
              value="No"
              name="question4"
              required
            />
            Yes
            <Radio
              checked={question4 === "Yes"}
              onChange={(e) => updateFields({ question4: e.target.value })}
              value="Yes"
              name="question4"
              required
            />
          </div>
        </div>
      </Stack>
    </FormWrapper>
  );
}
