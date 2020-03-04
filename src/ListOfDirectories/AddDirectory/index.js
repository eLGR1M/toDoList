import "./styles.scss";

import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { Context } from "../../Context";

Modal.setAppElement("#root");
export default function AddDirectory() {
  const [value, setValue] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const { createDirectory } = useContext(Context);

  const modalStyles = {
    content: {
      width: "450px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "20px 0",
      transform: "translate(-50%, -50%)",
      borderRadius: "0"
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (value !== "") {
      createDirectory(value);
      setValue("");
      closeModal();
    }
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-top-content">
          <p>Add new directory</p>
          <button className="modal-exit-button" onClick={closeModal}>
            <i aria-hidden="true" className="icon x"></i>
          </button>
        </div>
        <form className="modal-main-content" onSubmit={onFormSubmit}>
          <div className="modal-input">
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
              type="text"
              placeholder="New directory . . . "
              autoFocus
            />
            <button onClick={onFormSubmit}>
              <i aria-hidden="true" className="add icon"></i>
            </button>
          </div>
        </form>
      </Modal>

      <button className="directory-add-button" onClick={openModal}>
        <i aria-hidden="true" className="add icon"></i>
      </button>
    </>
  );
}
