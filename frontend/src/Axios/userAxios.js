import axios from "axios";
const URL = "http://localhost:4000/user";

const getUser = async (cb) => {
  try {
    let getUser = await axios({
      method: "GET",
      url: URL,
    });
    cb(getUser);
  } catch (error) {
    console.log(error);
  }
};

export { getUser };
