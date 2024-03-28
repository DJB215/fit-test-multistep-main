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
            Confirm Deletion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "130px",
          }}
        >
          <form
            id="deletemodal"
            className="w-full max-w-lg"
            onSubmit={(e) => {
              e.preventDefault();
              props.deleteUser(props.id);
            }}
          >
            Are you sure you would like to delete this user?
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
            No
          </button>
          <button
            className="text-white font-bold py-2 px-4 rounded"
            style={{ background: "#152456" }}
            form="editmodal"
          >
            Yes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
