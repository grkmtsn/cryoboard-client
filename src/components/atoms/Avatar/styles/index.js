import styled, { css } from "styled-components";

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.spacing.xxlarge}rem;
  height: ${(props) => props.theme.spacing.xxlarge}rem;
  border-radius: 4px;
  cursor: pointer;

  ${(props) =>
    props.src
      ? css`
          background-size: cover;
          background-image: url("${props.src}");
        `
      : css`
          background-color: ${(props) => props.theme.colors.secondary};
        `}
`;
