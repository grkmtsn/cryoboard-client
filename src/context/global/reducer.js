import { TYPES } from "./types";

export default function globalReducer(state, action) {
  switch (action.type) {
    case TYPES.SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.payload,
      };
    default:
      return state;
  }
}
