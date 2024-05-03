import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import EditUser from "./EditUser";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import UserMenu from "./UserMenu";
import "../css/admin.css";

export default function UserTable() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  function toggleShowDelete() {
    setShowDelete(!showDelete);
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/user", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  function newUser(firstname, lastname, campuskey, accesslevel, location) {
    const data = {
      firstname,
      lastname,
      campuskey,
      accesslevel,
      location,
    };
    const url = "http://127.0.0.1:5000/api/user";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        toggleShow();
        console.log(data);
        window.location.reload();
        // assume the add was successful
        // hide the modal
        // make sure the list is updated appropriately
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function updateUser(
    id,
    firstname,
    lastname,
    campuskey,
    accesslevel,
    location
  ) {
    const data = {
      id: id,
      firstname: firstname,
      lastname: lastname,
      campuskey: campuskey,
      accesslevel: accesslevel,
      location: location,
    };
    const url = "http://127.0.0.1:5000/api/user/" + id;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        toggleShow();
        console.log(data);
        window.location.reload();
        // assume the add was successful
        // hide the modal
        // make sure the list is updated appropriately
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function deleteUser(id) {
    const url = "http://127.0.0.1:5000/api/user/" + id;
    fetch(url, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        toggleShowDelete();
        console.log(data);
        window.location.reload();
        // assume the add was successful
        // hide the modal
        // make sure the list is updated appropriately
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <UserMenu />
      <TableContainer className="table-container">
        <AddUser newUser={newUser} show={show} toggleShow={toggleShow} />
        <Table
          sx={{
            minWidth: 650,
            border: "1px solid #152456",
            marginLeft: 10,
            marginTop: 5,
            marginBottom: "160px",
            width: 1400,
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
                Name
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "museo-sans",
                  borderRight: "1px solid #152456",
                }}
              >
                Campus Key
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontFamily: "museo-sans",
                  borderRight: "1px solid #152456",
                }}
              >
                Access Level
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontFamily: "museo-sans",
                  borderRight: "1px solid #152456",
                }}
              >
                Location(s)
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontFamily: "museo-sans",
                  borderRight: "1px solid #152456",
                }}
              >
                Delete User
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
                      {item.firstname} {item.lastname}
                      <EditUser
                        id={item.id}
                        firstname={item.firstname}
                        lastname={item.lastname}
                        campuskey={item.campuskey}
                        accesslevel={item.accesslevel}
                        location={item.location}
                        updateUser={updateUser}
                        show={show}
                        toggleShow={toggleShow}
                      />
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.campuskey}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.accesslevel}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.location}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ backgroundColor: "#FFFFFF", margin: "o auto" }}
                    >
                      <DeleteUser
                        deleteUser={deleteUser}
                        id={item.id}
                        showDelete={showDelete}
                        toggleShowDelete={toggleShowDelete}
                        sx={{ textAlign: "center" }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
