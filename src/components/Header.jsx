const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#152456",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        width: "100%",
        height: "125px",
      }}
    >
      <img
        src="/src/assets/header.png"
        style={{ marginTop: "20px", marginLeft: "62px", marginBottom: "20px" }}
      />
    </div>
  );
};

export default Header;
