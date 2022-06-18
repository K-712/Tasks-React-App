import React from "react";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.checkItem(props.id);
      }}
    >
      <li>
        <CheckBoxOutlineBlankSharpIcon className="icon clickable" />
        <span className="todo-item">{props.item}</span>
      </li>
    </div>
  );
}
export default ToDoItem;
