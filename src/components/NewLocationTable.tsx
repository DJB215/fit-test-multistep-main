import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import EditLocation from "./EditLocation";
import AddLocation from "./AddLocation";
import DeleteLocation from "./DeleteLocation";
import CalendarMenu from "./CalendarMenu";

export default function NewLocationTable() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  function toggleShowUpdate() {
    setShowUpdate(!showUpdate);
  }

  function toggleShowDelete() {
    setShowDelete(!showDelete);
  }

  interface Location {
    id: number;
    room: string;
    testers: number;
    weekends: string;
    location: string;
    starttime: string;
    endtime: string;
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/location", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  function newLocation(
    location: string,
    room: string,
    testers: number,
    starttime: string,
    endtime: string
  ) {
    const data = {
      location: location,
      room: room,
      testers: testers,
      starttime: starttime,
      endtime: endtime,
    };
    const url = "http://127.0.0.1:5000/api/location";
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

  function updateLocation(
    id: number,
    location: string,
    room: string,
    testers: number,
    starttime: string,
    endtime: string
  ) {
    const data = {
      id: id,
      location: location,
      room: room,
      testers: testers,
      starttime: starttime,
      endtime: endtime,
    };
    const url = "http://127.0.0.1:5000/api/location/" + id;
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
        toggleShowUpdate();
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

  function deleteLocation(id: number) {
    const url = "http://127.0.0.1:5000/api/location/" + id;
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
      <CalendarMenu />
      <AddLocation newUser={newLocation} show={show} toggleShow={toggleShow} />
      <TableContainer className="table-container">
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
                Location
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "museo-sans",
                  fontWeight: "bold",
                  borderRight: "1px solid #152456",
                }}
              >
                Room(s)
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontFamily: "museo-sans",
                  fontWeight: "bold",
                  borderRight: "1px solid #152456",
                }}
              >
                # of Testers
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontFamily: "museo-sans",
                  fontWeight: "bold",
                  borderRight: "1px solid #152456",
                }}
              >
                Start Time
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontFamily: "museo-sans",
                  fontWeight: "bold",
                  borderRight: "1px solid #152456",
                }}
              >
                End Time
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontFamily: "museo-sans",
                  fontWeight: "bold",
                  borderRight: "1px solid #152456",
                }}
              >
                Delete Location
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0
              ? data.map((item: Location) => (
                  <TableRow
                    key={item.location}
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
                      {item.location}
                      <EditLocation
                        id={item.id}
                        location={item.location}
                        room={item.room}
                        testers={item.testers}
                        starttime={item.starttime}
                        endtime={item.endtime}
                        updateLocation={updateLocation}
                        showUpdate={showUpdate}
                        toggleShowUpdate={toggleShowUpdate}
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
                      {item.room}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.testers}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.starttime}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRight: "1px solid #152456",
                        fontFamily: "museo-sans",
                      }}
                    >
                      {item.endtime}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#FFFFFF", margin: "o auto" }}
                    >
                      <DeleteLocation
                        deleteLocation={deleteLocation}
                        id={item.id}
                        showDelete={showDelete}
                        toggleShowDelete={toggleShowDelete}
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
