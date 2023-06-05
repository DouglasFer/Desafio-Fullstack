export function getTokenFromLocalStorage() {
  if (localStorage.getItem("@TOKEN") == null) return;
  const token = JSON.parse(localStorage.getItem("@TOKEN"));

  return token;
}
export function getidUserLocalStorage() {
  if (localStorage.getItem("@ClientId") == null) return;
  const userId = JSON.parse(localStorage.getItem("@ClientId"));

  return userId;
}
