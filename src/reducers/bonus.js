import { INCBONUS, INCBYAMT } from "../actions";

export function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case INCBONUS:
      return { points: state.points + 1 };
    case INCBYAMT:
      if (action.payload >= 100) {
        return { points: state.points + 1 };
      }
      break;
    default:
      return state;
  }
}
