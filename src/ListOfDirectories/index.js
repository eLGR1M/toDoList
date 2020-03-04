import "./styles.scss";

import React, { useContext } from "react";
import AddDirectory from "./AddDirectory";
import { Context } from "../Context";
import { Link } from "react-router-dom";

export default function ListOfDirectories() {
  const { removeDirectory, setKeySelected, directoriesList } = useContext(
    Context
  );

  const contentDirectories = listLength => {
    return (
      <>
        {listLength !== 0 ? (
          <div>
            <h1 className="direct-style-text">Directories:</h1>
            {listDirectory}
          </div>
        ) : (
          <div className="contentNoDirectories">
            <h1>Add new Directory</h1>
          </div>
        )}
        <AddDirectory />
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
              <label className="checkbox">{directory.name}</label>
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
      {contentDirectories(listDirectory.length)}
    </div>
  );
}
