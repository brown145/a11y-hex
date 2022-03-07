import { TOKEN_TYPES } from "../../../types";
import { gameColors } from "../../../theme";

function overlayToColors({ token }) {
  switch (token) {
    case TOKEN_TYPES.Notation:
      return ["#fff", "#000"];
    case TOKEN_TYPES.Trap:
      return [gameColors.trap, "#000"];
    default:
      return ["#fff", "#000"];
  }
}

export default overlayToColors;
