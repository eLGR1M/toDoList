import "./styles.scss";

import React, {useContext, useState} from "react";
import Button from "../components/button";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Input from "../components/input";

Modal.setAppElement("#modal-root");
export default function ListOfDirectories() {
  const { removeDirectory, setKeySelected, directoriesList } = useContext(
    Context
  );

  const [value, setValue] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const { createDirectory } = useContext(Context);

  const modalStyles = {
    content: {
      width: "450px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "20px",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      backgroundColor: "#fff"
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (value !== "") {
      createDirectory(value);
      setValue("");
      closeModal();
    }
  };


  const contentModal = () =>{
    return(
      <Modal
        isOpen={isModalOpen}
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
            <Input value={value}
                   onChange={e => setValue(e.target.value)}
                   type="text"
                   placeholder="New directory . . . "
                   autofocus={true}
            />
            <Button textBtn="Add" onClick={onFormSubmit}>
              <i aria-hidden="true" className="add icon"></i>
            </Button>
          </div>
        </form>
      </Modal>
    )
  };


  const contentDirectories = listLength => {
    return (
      <>
        {listLength !== 0 ? (
          <div className="contentDirectories">
            <h1 className="direct-style-text">Directories:</h1>
            {listDirectory}
          </div>
        ) : (
          <div className="contentNoDirectories">
            <h1>Add new directory</h1>
          </div>
        )}
        <Button onClickBtn={openModal} classBtn="add-directory" textBtn="Add directory" />
      </>
    );
  };

  const listDirectory = directoriesList.map((directory, index) => {
    return (
      <li className="directory-select" key={index}>
        <div className="task-style">
          <Link className="link-style" to={`/directory/${directory.id}`}>
            <div
              className="label-content"
              onClick={() => {
                setKeySelected(directory.id);
              }}
            >
              <label className="checkbox-d">{directory.name}</label>
            </div>
          </Link>
          <div className="button-style">
            <button
              onClick={() => {
                setKeySelected(null);
                removeDirectory(directory.id);
              }}
            >
              <i
                aria-hidden="true"
                className="trash alternate outline icon"
              ></i>
            </button>
          </div>
        </div>
      </li>
    );
  });


  return (
    <div className="List-directory">
      {contentModal()}
      {contentDirectories(listDirectory.length)}
    </div>
  );
}
