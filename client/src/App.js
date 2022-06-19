import React, { useState, useEffect } from "react";
import InputArea from "./components/InputArea.jsx";
import ToDoItem from "./components/ToDoItem.jsx";
import DoneItem from "./components/DoneItem.jsx";
import EmptyToDo from "./components/EmptyToDo";
import getUser from "./functions/getUser.js";
import { getTodoList } from "./functions/getList.js";

function App() {
  const [data, setData] = useState({ user: "User", listname: "To Do List" });
  const [userInfo, setUserInfo] = useState();
  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    getUser(data.user).then(res => {
      setUserInfo(res[0]);
      setToDoList(res[0].lists.filter(list => list.listname === data.listname)[0].todo);
      setDoneList(res[0].lists.filter(list => list.listname === data.listname)[0].done);
    });
  }, []);

  function handleAdd(toDo) {
    setToDoList(prev => {
      return [...prev, toDo].filter((element, index, array) => array.indexOf(element) === index);
    });
  }

  function deleteItem(id) {
    setDoneList(prev => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function moveToDone(id) {
    let item = toDoList[id];
    setDoneList(prev => {
      return [item, ...prev].filter((element, index, array) => array.indexOf(element) === index);
    });

    setToDoList(prev => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function moveToDo(id) {
    let item = doneList[id];
    setToDoList(prev => {
      return [...prev, item].filter((element, index, array) => array.indexOf(element) === index);
    });

    setDoneList(prev => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <section className="heading">
        <h1>To-do List</h1>

        <InputArea handleAdd={handleAdd} />
      </section>
      <section className="todo">
        {toDoList.length === 0 && <EmptyToDo />}
        <ul>
          {toDoList.map((item, index) => {
            return <ToDoItem key={item} item={item} id={index} checkItem={moveToDone} />;
          })}
        </ul>
      </section>
      {doneList.length > 0 && <hr />}
      <section className="done">
        <ul>
          {doneList.map((item, index) => {
            return <DoneItem key={item} item={item} id={index} deleteItem={deleteItem} moveToDo={moveToDo} />;
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
