export function changeTheme(darkMode) {
  console.warn(darkMode);
  return {
    type: "CHANGE_THEME",
    payload: darkMode
  };
}
