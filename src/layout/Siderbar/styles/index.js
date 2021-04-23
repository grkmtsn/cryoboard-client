import styled from "styled-components";

export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30rem;
  min-width: 30rem;
  padding-top: ${(props) => props.theme.spacing.xxlarge}rem;
  padding-right: ${(props) => props.theme.spacing.medium}rem;
  padding-bottom: ${(props) => props.theme.spacing.xxlarge}rem;
  padding-left: ${(props) => props.theme.spacing.xxxlarge}rem;
  background: linear-gradient(
    180deg,
    rgba(38, 34, 80, 0.65) 0%,
    rgba(27, 25, 66, 0.85) 57.44%,
    #17163b 100%
  );
`;
