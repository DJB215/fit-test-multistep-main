import { Radio, Stack } from "@mui/material";
import { FormWrapper } from "./FormWrapper";

type HealthChangesQuestionData = {
  question1: string;
};

type HealthChangesQuestionProps = HealthChangesQuestionData & {
  updateFields: (fields: Partial<HealthChangesQuestionData>) => void;
};

export function HealthChangesQuestion({
  question1,
  updateFields,
}: HealthChangesQuestionProps) {
  return (
    <FormWrapper title="Question 1">
      <Stack direction="column" spacing={2}>
        <div
          style={{
            padding: "10px",
            maxWidth: "500px",
            fontSize: "18px",
            justifyContent: "center",
            color: "#152456",
            fontFamily: "museo-sans",
            fontWeight: "500",
            fontStyle: "normal",
            marginBottom: "23px",
          }}
          id="question"
        >
          In the past year, have you experienced any significant changes to your
          health affecting your ability to wear a respirator?
        </div>
        <div
          style={{
            padding: "10px",
            alignItems: "center",
            fontSize: "20px",
            color: "#152456",
            fontFamily: "museo-sans",
            fontWeight: "500",
            fontStyle: "normal",
          }}
        >
          <div
            style={{ fontSize: "20px", color: "#152456", marginBottom: "47px" }}
          >
            No
            <Radio
              checked={question1 === "No"}
              onChange={(e) => updateFields({ question1: e.target.value })}
              value="No"
              name="question1"
              style={{ marginRight: "50px" }}
              required
            />
            Yes
            <Radio
              checked={question1 === "Yes"}
              onChange={(e) => updateFields({ question1: e.target.value })}
              value="Yes"
              name="question1"
              required
            />
          </div>
        </div>
      </Stack>
    </FormWrapper>
  );
}
