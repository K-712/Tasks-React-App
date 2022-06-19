function getTodoList(userInfo, listname) {
  return userInfo.lists.filter(list => list.listname === listname)[0].todo;
}

function getDoneList(userInfo, listname) {
  return userInfo.lists.filter(list => list.listname === listname)[0].done;
}
export { getTodoList, getDoneList };
