import { Link } from "react-router-dom";

const CalendarMenu = () => {
  return (
    <div
      style={{ marginTop: "70px", marginLeft: "62px", marginBottom: "74px" }}
    >
      <span
        className="title"
        style={{ fontFamily: "museo-sans", fontSize: "50px", color: "#152456" }}
      >
        User Accounts
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
        <Link
          to="/results"
          style={{ textDecoration: "none", color: "#152456" }}
        >
          {" "}
          Survey Results
        </Link>
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
        <span style={{ color: "#59B7DF" }}>{"  "} User Accounts</span>
      </span>
    </div>
  );
};

export default CalendarMenu;
