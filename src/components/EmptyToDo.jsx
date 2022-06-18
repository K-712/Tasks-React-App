import React from "react";
import CelebrationSharpIcon from "@mui/icons-material/CelebrationSharp";

function EmptyToDo(props) {
  return (
    <span className="message">
      <CelebrationSharpIcon className="icon" /> No active tasks! <CelebrationSharpIcon className="icon" />
    </span>
  );
}
export default EmptyToDo;
