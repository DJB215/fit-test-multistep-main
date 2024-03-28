import { FC, ReactElement } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
  id: number;
}

export default function Modal(props: ModalProps): ReturnType<FC> {
  return (
    <div
      className={`${"modal"} ${props.open ? "display=block" : "display-none"}`}
    >
      <div className="modal-main">
        <h1>Modal</h1>
      </div>
      <div className="btn-container">
        <button type="button" className="btn" onClick={props.onClose}>
          No
        </button>
        <button type="button" className="btn" onClick={props.onClose}>
          Yes
        </button>
      </div>
    </div>
  );
}
