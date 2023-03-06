import axios from "axios";

const API_URL = "/api/v1/users";

// register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
};

export default authService;
