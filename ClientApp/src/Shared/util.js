export const getUserToken = () => {
  const token = JSON.parse(localStorage.getItem("user_token"));
  if (!token) {
    return null;
  }
  return token["token"];
};
