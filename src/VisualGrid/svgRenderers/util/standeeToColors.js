import { STANDDEE_TYPES } from "../../../types";
import { gameColors } from "../../../theme";

function standeeToColors({ standee }) {
  switch (standee) {
    case STANDDEE_TYPES.Monster:
      return [gameColors.monster, "#661c2c"];
    case STANDDEE_TYPES.Summon:
    case STANDDEE_TYPES.Player:
      return [gameColors.brute, "#312574"];
    default:
      return ["#fff", "#000"];
  }
}

export default standeeToColors;
