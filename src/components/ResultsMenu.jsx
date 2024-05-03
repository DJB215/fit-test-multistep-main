import { Link } from "react-router-dom";

const ResultsMenu = () => {
  return (
    <div
      style={{ marginTop: "70px", marginLeft: "62px", marginBottom: "74px" }}
    >
      <span
        className="title"
        style={{ fontFamily: "museo-sans", fontSize: "50px", color: "#152456" }}
      >
        Fit Testing Survey Results
      </span>
      <span
        className="items"
        style={{
          float: "right",
          marginRight: "62px",
          marginTop: "30px",
          fontFamily: "museo-sans",
          fontSize: "20px",
          color: "#152456",
        }}
      >
        <span style={{ color: "#59B7DF" }}>
          {"  "} Survey Results {"  "}
        </span>
        {"  "}
        {"  "}|{"  "}
        <Link
          to="/locations"
          style={{ textDecoration: "none", color: "#152456" }}
        >
          {"  "} Edit Calendar
        </Link>
        {"  "}
        {"  "}|{"   "}{" "}
        <Link
          to="/locations"
          style={{ textDecoration: "none", color: "#152456" }}
        >
          {"  "} User Accounts
        </Link>
      </span>
    </div>
  );
};

export default ResultsMenu;
