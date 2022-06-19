function getTodoList(userInfo, listname) {
  userInfo.lists.map((e, i) => {
    if (e.listname === listname) {
      return e.todo;
    }
  });
}

function getDoneList(userInfo, listname) {
  return;
}
export { getTodoList, getDoneList };
