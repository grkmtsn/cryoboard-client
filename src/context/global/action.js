import { TYPES } from "./types";
export const changePageTitle = (payload, dispatch) => {
  dispatch({
    type: TYPES.SET_PAGE_TITLE,
    payload,
  });
};
