import axios from "axios";

function saveListToUser(listname, todo, done, userInfo) {
  const username = userInfo.username;
  userInfo.lists.filter(list => list.listname === listname)[0].todo = todo;
  userInfo.lists.filter(list => list.listname === listname)[0].done = done;
  axios.put("http://localhost:5000/user/" + username, userInfo);
  return userInfo;
}

export default saveListToUser;
