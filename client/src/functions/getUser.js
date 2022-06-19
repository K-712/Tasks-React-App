import axios from "axios";

const getUser = async currentUser => {
  const res = await axios.get("http://localhost:5000/user/" + currentUser);
  return res.data;
};
export default getUser;
