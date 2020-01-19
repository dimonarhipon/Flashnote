import React from "react";
import clases from "./FlashNote.module.css";
import Note from "../Note/Note.js";

let FlashNote = () => {
  return (
    <div>
      <div className={clases.pagination}>
        <button>1</button>
      </div>
      <div className={clases.container}>
        <div className={clases.row}>
          <div className={clases.column} draggable="true">
            <p className={clases.column_header} contenteditable="true">
              Заголовок 1
            </p>
            <div data-notes>
              <Note />
            </div>
            <div className={clases.footer}>
              <button className={clases.addNote}>+ Добавить карточку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashNote;
