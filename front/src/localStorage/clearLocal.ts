export const clearLocal = () => {
  localStorage.removeItem("@TOKEN");
  localStorage.removeItem("@ClientId");

  return;
};
