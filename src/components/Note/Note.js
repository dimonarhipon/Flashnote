import React from "react";
import clases from "./Note.module.css";

let Note = props => {
  debugger;
  return (
    <div>
      <div className={clases.note_wrap} id={props.id}>
        <button
          className={clases.note_delete}
          onClick={() => {
            props.removeNode(props.id);
          }}
        >
          Х
        </button>
        <h2 className={clases.note}>{props.title}</h2>
        <div className={clases.note}>{props.text}</div>
      </div>
    </div>
  );
};

export default Note;
