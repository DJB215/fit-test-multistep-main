import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaPencil } from "react-icons/fa6";

export default function EditUser(props) {
  const [id, setId] = useState(props.id);
  const [location, setLocation] = useState(props.location);
  const [room, setRoom] = useState(props.room);
  const [testers, setTesters] = useState(props.testers);
  const [starttime, setStarttime] = useState(props.starttime);
  const [endtime, setEndtime] = useState(props.endtime);

  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span
        style={{
          display: "flex",
          justifyContent: "flex-end",
          float: "right",
          marginRight: 0,
          padding: "10px",
        }}
      >
        <FaPencil onClick={handleShow} />
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="editmodal"
            className="w-full max-w-lg"
            onSubmit={(e) => {
              e.preventDefault();
              setId(0);
              setLocation("");
              setRoom("");
              setTesters(0);
              setStarttime("");
              setEndtime("");
              props.updateLocation(
                id,
                location,
                room,
                testers,
                starttime,
                endtime
              );
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstname"
                >
                  Location
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="location"
                  type="text"
                  value={location}
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
                  value={room}
                  onChange={(e) => {
                    setRoom(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="starttime"
                >
                  Start Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="starttime"
                  type="time"
                  value={starttime}
                  onChange={(e) => {
                    setStarttime(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="endtime"
                >
                  End Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="endtime"
                  type="time"
                  value={endtime}
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
                    setTesters(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={props.toggleShow}
          >
            Close
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            form="editmodal"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
