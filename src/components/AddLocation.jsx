import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function AddLocation(props) {
  const [room, setRoom] = useState("");
  const [testers, setTesters] = useState(0);
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [location, setLocation] = useState("");

  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ marginLeft: 70 }}>
        <button
          onClick={handleShow}
          className="block m-2 bg-purple-600 hover:bg-purple-700 font-bold py-2 px-4 rounded"
          style={{
            marginLeft: 10,
            fontFamily: "museo-sans",
            fontSize: 24,
            width: "278px",
            height: "48px",
            color: "#152456",
            backgroundColor: "white",
            border: "1px solid #152456",
          }}
        >
          + Add New Location
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="addmodal"
            className="w-full max-w-lg"
            onSubmit={(e) => {
              e.preventDefault();
              setLocation("");
              setRoom("");
              setTesters(0);
              setStarttime(new Date().toLocaleTimeString());
              setEndtime(new Date().toLocaleTimeString());
              props.newUser(location, room, testers, starttime, endtime);
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="location"
                  type="text"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="room"
                >
                  Room Details
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="room"
                  type="text"
                  onChange={(e) => {
                    setRoom(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Start Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="starttime"
                  type="time"
                  onChange={(e) => {
                    setStarttime(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  End Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="endtime"
                  type="time"
                  onChange={(e) => {
                    setEndtime(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="testers"
                >
                  # of Testers
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="testers"
                  type="number"
                  value={testers}
                  onChange={(e) => {
                    setTesters(e.target.valueAsNumber);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
            onClick={props.toggleShowAdd}
          >
            Close
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            form="addmodal"
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
