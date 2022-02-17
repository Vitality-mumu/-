const getUser=()=>{
  const username=JSON.parse(sessionStorage.getItem('USER'));
    return username || {};
}
const clearUser=()=>{
    sessionStorage.removeItem('USER');
}
export default{
    getUser,
    clearUser
}