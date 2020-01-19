import React from "react";
import clases from "./FlashNote.module.css";
import Note from "../Note/Note.js";

let FlashNote = props => {
  debugger;
  let add = () => {
    props.addNote();
  };
  let changeTitle = e => {
    let title = e.target.value;
    props.changeTitle(title);
  };
  let changeText = e => {
    let text = e.target.value;
    props.changeText(text);
  };
  let removeNote = id => {
    props.deleteNote(id);
  };
  return (
    <div>
      {/* <div className={clases.pagination}>
        <button>1</button>
      </div> */}
      <div className={clases.container}>
        <div className={clases.row}>
          <div className={clases.column}>
            <input
              className={clases.note}
              type="text"
              value={props.Title}
              onChange={changeTitle}
            />
            <textarea
              className={clases.note}
              type="text"
              value={props.Text}
              onChange={changeText}
            />
            <div className={clases.footer}>
              <button className={clases.addNote} onClick={add}>
                + Добавить карточку
              </button>
            </div>
            <div data-notes>
              {props.notes.map(({ id, title, text }) => (
                <Note
                  id={id}
                  key={id}
                  title={title}
                  text={text}
                  removeNote={removeNote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashNote;
