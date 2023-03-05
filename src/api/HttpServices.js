// import axios from "axios";
//
// const token = window.localStorage.getItem('token');
//
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// //axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
//
// axios.interceptors.response.use(null, error => {
//     const expectedErrors =
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status < 500;
//     if (!expectedErrors) {
//         console.log(error);
//     }
//     return Promise.reject(error);
// });
//
// export default {
//     get: axios.get,
//     post: axios.post,
//     put: axios.put,
//     delete: axios.delete
// };
