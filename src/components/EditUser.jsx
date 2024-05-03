import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { FaPencil } from "react-icons/fa6";

export default function EditUser(props) {
  const [id, setId] = useState(props.id);
  const [firstname, setFirstname] = useState(props.firstname);
  const [lastname, setLastname] = useState(props.lastname);
  const [campuskey, setCampuskey] = useState(props.campuskey);
  const [accesslevel, setAccesslevel] = useState(props.accesslevel);
  const [location, setLocation] = useState(props.location);

  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/location", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <span
        style={{
          display: "flex",
          justifyContent: "flex-end",
          float: "right",
          background: "aqua",
          marginRight: 0,
          padding: "10px",
        }}
      >
        <FaPencil onClick={handleShow} width="20px" height="20px" />
      </span>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        style={{ fontFamily: "museo-sans", border: "none" }}
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <Modal.Title
            style={{
              border: 0,
              margin: "0 auto",
              marginRight: 0,
              fontSize: "40px",
            }}
          >
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            id="editmodal"
            className="w-full max-w-lg"
            onSubmit={(e) => {
              e.preventDefault();
              setId(0);
              setFirstname("");
              setLastname("");
              setCampuskey("");
              setAccesslevel("");
              setLocation("");
              props.updateUser(
                id,
                firstname,
                lastname,
                campuskey,
                accesslevel,
                location
              );
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastname"
                  type="text"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="campuskey"
                >
                  Campus Key
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="campuskey"
                  type="text"
                  value={campuskey}
                  onChange={(e) => {
                    setCampuskey(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="accesslevel"
                >
                  Access Level
                </label>
                <select
                  id="accesslevel"
                  className="form-select form-select-lg mb-3"
                  onChange={(e) => setAccesslevel(e.target.value)}
                >
                  <option value="">Make selection</option>
                  <option value="General">General</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <select
                  id="location"
                  className="form-select form-select-lg mb-3"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Select all that apply</option>
                  {data.length > 0
                    ? data.map((item) => (
                        <option value={item.location}>{item.location}</option>
                      ))
                    : null}
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
            borderTop: "none",
          }}
        >
          <button
            className="font-bold py-2 px-4 rounded"
            style={{
              background: "#fff",
              color: "#152456",
              border: "1px solid #152456",
            }}
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="text-white font-bold py-2 px-4 rounded"
            style={{ background: "#152456" }}
            form="editmodal"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
