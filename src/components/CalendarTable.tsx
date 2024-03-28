import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
  lastName: string,
  firstName: string,
  id: string,
  location: string,
  testDate: string,
  testTime: string
) {
  return { lastName, firstName, id, location, testDate, testTime };
}

const rows = [
  createData(
    "Banner",
    "Bruce",
    "BBB001@jefferson.edu",
    "Abington",
    "1/27/2024",
    "9:00AM"
  ),
  createData(
    "Lane",
    "Lois",
    "ABA001@jefferson.edu",
    "Abington",
    "1/27/2024",
    "9:15AM"
  ),
  createData(
    "Parker",
    "Peter",
    "ABC0012@jefferson.edu",
    "Abington",
    "1/28/2024",
    "4:00PM"
  ),
  createData(
    "Kent",
    "Clark",
    "BCA012@jefferson.edu",
    "Abington",
    "1/278/2024",
    "2:40AM"
  ),
];

export default function CalendarTable() {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650, border: "1px solid #707070" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#CDC6C1",
              borderRight: "1px solid #707070",
            }}
          >
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="center">Jefferson ID</TableCell>
            <TableCell align="center">Location of Fit Test</TableCell>
            <TableCell align="center">Date of Fit Test</TableCell>
            <TableCell align="center">Time of Fit Test</TableCell>
            <TableCell align="center">Survey</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.lastName}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRight: "1px solid #707070",
                }}
              >
                {row.lastName}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRight: "1px solid #707070",
                }}
              >
                {row.firstName}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRight: "1px solid #707070",
                }}
              >
                {row.id}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRight: "1px solid #707070",
                }}
              >
                {row.location}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRight: "1px solid #707070",
                }}
              >
                {row.testDate}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRight: "1px solid #707070",
                }}
              >
                {row.testTime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
