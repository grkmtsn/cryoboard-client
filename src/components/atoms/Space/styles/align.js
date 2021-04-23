import { css } from "styled-components";

export const setAlign = (align) => {
  switch (align) {
    case "baseline":
      return css`
        align-items: baseline;
      `;
    case "center":
      return css`
        align-items: center;
      `;
    case "end":
      return css`
        align-items: flex-end;
      `;
    case "start":
      return css`
        align-items: flex-start;
      `;
  }
};
