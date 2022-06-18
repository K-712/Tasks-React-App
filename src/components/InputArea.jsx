import React, { useState } from "react";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";

function InputArea(props) {
  const [toDo, setToDo] = useState("");

  function handleChange(event) {
    const currentToDo = event.target.value;
    setToDo(currentToDo);
  }

  function handleClick(event) {
    if (toDo.trim() !== "") {
      props.handleAdd(toDo.trim());
      setToDo("");
    }
  }
  function handleKeypress(event) {
    if (event.charCode === 13) {
      handleClick();
    }
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={toDo} onKeyPress={handleKeypress} placeholder="add a task" />
      <button onClick={handleClick} className="addButton">
        <AddBoxSharpIcon fontSize="large" className="icon clickable" />
      </button>
    </div>
  );
}

export default InputArea;
