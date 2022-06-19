import React from "react";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
function DoneItem(props) {
  return (
    <div className="flexy">
      <li>
        <CheckBoxSharpIcon className="icon" />
        <span className="todo-item done-item">{props.item}</span>
        <div className="right-align">
          <button
            onClick={() => {
              props.moveToDo(props.id);
            }}
            className="done-button"
          >
            <ReplaySharpIcon className="icon clickable" />
          </button>
          <button
            onClick={() => {
              props.deleteItem(props.id);
            }}
            className="done-button"
          >
            <DeleteOutlineSharpIcon className="icon clickable" />
          </button>
        </div>
      </li>
    </div>
  );
}
export default DoneItem;
