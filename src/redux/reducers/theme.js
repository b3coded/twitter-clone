export default function theme(state = { darkMode: false }, action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return action.payload;

    default:
      return state;
  }
}
