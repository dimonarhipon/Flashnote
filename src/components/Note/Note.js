import React from "react";
import clases from "./Note.module.css";

let Note = props => {
  debugger;
  return (
    <div>
      <div className={clases.note_wrap}>
        <button
          className={clases.note_delete}
          onClick={() => {
            props.deleteNote(props.id);
          }}
        >
          Х
        </button>
        <h2 className={clases.note}>{props.title}</h2>
        {props.editMode ? (
          <input
            id={props.id}
            className={clases.note}
            type="text"
            onBlur={props.deactiveEditMode}
            onChange={() => props.updateText(props.id)}
            // value={props.text}
          />
        ) : (
          <div className={clases.note} onDoubleClick={props.activeEditMode}>
            {props.text}
          </div>
        )}
        {/* <input className={clases.note} value={props.text} /> */}
      </div>
    </div>
  );
};

export default Note;
