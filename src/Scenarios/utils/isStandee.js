import { STANDDEE_TYPES } from "../../types";

export function isStandee(hex) {
  return Object.values(STANDDEE_TYPES).includes(hex?.standee);
}
