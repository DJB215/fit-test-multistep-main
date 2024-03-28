import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaTrashCan } from "react-icons/fa6";

export default function DeleteUser(props) {
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          margin: "o auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FaTrashCan onClick={handleShow} />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="deletemodal"
            className="w-full max-w-lg"
            onSubmit={(e) => {
              e.preventDefault();
              props.deleteLocation(props.id);
            }}
          >
            Are you sure you would like to delete this location?
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={props.toggleShow}
          >
            No
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            form="deletemodal"
          >
            Yes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
