
export const isLoggedIn = () => {
  return localStorage.getItem("adminLoggedIn") === "true";
};

export const login = () => {
  localStorage.setItem("adminLoggedIn", "true");
};

export const logout = () => {
  localStorage.removeItem("adminLoggedIn");
};
