import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${(props) =>
    props.active ? props.theme.colors.secondary : "transparent"};
  border: 1px solid #312f62;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.large}rem;
  cursor: pointer;
  transition: background-color 0.4s ease;
  box-shadow: ${(props) =>
    props.active
      ? "rgb(0 255 131 / 10%) 0px 10px 15px -3px, rgb(13 255 138 / 5%) 0px 4px 6px -2px"
      : "none"};
  > svg {
    margin-right: ${(props) => props.theme.spacing.large}rem;
  }

  &:hover {
    background-color: ${(props) =>
      props.active ? props.theme.colors.secondary : props.theme.colors.primary};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
