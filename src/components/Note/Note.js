import React from "react";
import clases from "./Note.module.css";

class Note extends React.Component {
  updateNote = event => {
    console.log(3);
  };
  render() {
    return (
      <div>
        <div className={clases.note_wrap} draggable="true">
          <div className={clases.note} contenteditable="true">
            Текст
          </div>
          <button className={clases.note_delete}>x</button>
        </div>
      </div>
    );
  }
}

export default Note;
