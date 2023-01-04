import { BASE_URL } from "./constant";
import { AXIOS } from "./constant";

export const getTodoList = async () => {
  try {
    const res = await AXIOS.get("/todos");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

// export const getTodoList = () => {
//   return fetch(`${BASE_URL}/todos`);
// };

// export const getTodoList = () => {
//   return new Promise((resolve, reject) => {
//     fetch(`${BASE_URL}/todos`)
//       .then((res) => res.json())
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
