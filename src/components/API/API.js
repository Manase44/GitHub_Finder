// const API = (link) => {
//   const data = {
//     "name":"username",
//     "age": 21
//   }
//   const error = "This is your error";
//   const success = true;
//   if (success) {
//     return data
//   } else {
//     return error
//   }
// };
const apiFetch = async (url) => {
    try {
      const response = await fetch(`${url}`)

      if (!response.ok) {
        throw new Error("Something went wrong! We are unable to get your request")
      } else {
        const data = await response.json();
        console.log(data);
        return data;
      }
    }
    catch (err) {
      console.log(err)
    }
  }

export default apiFetch;
