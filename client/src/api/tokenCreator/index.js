const setToken = (token) => {
  localStorage.setItem("jwt", token);
};

const getToken = () => {
  const token = localStorage.getItem("jwt");
  return token;
};

const removeToken = () => {
  localStorage.removeItem("jwt");
};

export { setToken, getToken, removeToken };
