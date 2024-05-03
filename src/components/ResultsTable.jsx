import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import ResultsMenu from "./ResultsMenu";
import "../css/admin.css";

export default function ResultsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/survey", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //const pageCount = data ? Math.ceil(data.length / pageSize) : 0;

  //if (pageCount === 1) return null;
  //const pages = _.range(1, pageCount + 1);

  return (
    <>
      <ResultsMenu />
      <TableContainer className="table-container">
        <Table
          sx={{
            minWidth: 650,
            border: "1px solid #152456",
            marginLeft: 10,
            marginTop: 5,
            marginBottom: "160px",
            width: 1500,
            fontFamily: "museo-sans",
          }}
          aria-label="simple table"
        >
          <TableHead sx={{ border: "1px solid #152456" }}>
            <TableRow
              sx={{
                background: "#CDC6C1",
                fontFamily: "museo-sans",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#152456",
                border: "1px solid #152456",
              }}
            >
              <TableCell
                align="left"
                style={{
                  fontFamily: "museo-sans",
                  fontWeight: "bold",
                  borderRight: "1px solid #152456",
                }}
              >
                Jefferson ID
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "museo-sans",
                  borderRight: "1px solid #152456",
                  fontWeight: "bold",
                }}
              >
                Completed Date
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "museo-sans",
                  borderRight: "1px solid #152456",
                  fontWeight: "bold",
                }}
              >
                Question 1
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "museo-sans",
                  borderRight: "1px solid #152456",
                  fontWeight: "bold",
                }}
              >
                Question 2
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "museo-sans",
                  borderRight: "1px solid #152456",
                  fontWeight: "bold",
                }}
              >
                Quesion 3
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "museo-sans",
                  borderRight: "1px solid #152456",
                  fontWeight: "bold",
                }}
              >
                Quesion 4
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0
              ? data.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      fontFamily: "museo-sans",
                      fontSize: "18px",
                      color: "#152456",
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.jeffid}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.completeddate}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.question1}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.question2}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.question3}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.question4}
                    </TableCell>
                  </TableRow>
                ))
              : "Loading"}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
