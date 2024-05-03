import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../css/index.css";

const Title = () => {
  return (
    <Box
      className="titleBox"
      display="flex"
      justifyContent="space-between"
      p={1}
    >
      <Typography variant="body1">Jefferson Fit Test</Typography>
      <Typography variant="body1">
        <img src="/src/assets/logout.png" width="41px" height="41px" />
        Log Out
      </Typography>
    </Box>
  );
};

export default Title;
