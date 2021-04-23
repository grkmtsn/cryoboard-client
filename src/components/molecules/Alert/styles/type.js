import { css } from "styled-components";

const success = css`
  border: 1px solid ${(props) => props.theme.colors.success};
  background-color: rgb(42 199 105 / 10%);
`;

const error = css`
  border: 1px solid ${(props) => props.theme.colors.error};
  background-color: rgb(216 69 75 / 10%);
`;

const type = {
  success,
  error,
};

export default type;
