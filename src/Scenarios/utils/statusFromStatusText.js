import { STANDDEE_STATUS_EFFECTS } from "../../types";

const statusFromStatusText = (text) => {
  switch (text.toLowerCase()) {
    case "disarmed":
      return STANDDEE_STATUS_EFFECTS.Disarmed;
    case "immoblized":
      return STANDDEE_STATUS_EFFECTS.Immoblized;
    case "invisible":
      return STANDDEE_STATUS_EFFECTS.Invisible;
    case "muddled":
      return STANDDEE_STATUS_EFFECTS.Muddled;
    case "poisoned":
      return STANDDEE_STATUS_EFFECTS.Poisoned;
    case "stuned":
      return STANDDEE_STATUS_EFFECTS.Stuned;
    case "wounded":
      return STANDDEE_STATUS_EFFECTS.Wounded;
    default:
      return null;
  }
};

export default statusFromStatusText;
