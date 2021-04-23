import styled from "styled-components";

export const StyledContent = styled.main`
  flex: 1;
  padding-top: ${(props) => props.theme.spacing.xxlarge}rem;
  padding-right: ${(props) => props.theme.spacing.medium}rem;
  padding-bottom: ${(props) => props.theme.spacing.medium}rem;
  padding-left: ${(props) => props.theme.spacing.medium}rem;
`;