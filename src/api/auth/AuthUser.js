import http from "../HttpServices";

// export const registerUser = user => {
//     return http.post(
//         '/api/v1/adminLogin/',
//         JSON.stringify(user)
//     );
// };
// registerUser(user).then((response)=>{
//     if(response.status === 200){
//         console.log(response.data);
//         var token = response.data['access_token'];
//         dispatch(AccessToken(token));
//         console.log(user);
//         window.location.href="/user";
//     }
// }).catch((e)=>{
//     console.log(e);
// })