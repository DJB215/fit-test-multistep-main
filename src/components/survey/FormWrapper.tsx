import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          marginTop: "70px",
          fontSize: "50px",
          fontFamily: "museo-sans",
          fontWeight: "700",
          fontStyle: "normal",
          color: "#152456",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "auto",
          gridTemplateColumns: "auto",
          alignItems: "center",
          marginLeft: "260px",
          marginRight: "260px",
          marginBottom: "25px",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </>
  );
}
