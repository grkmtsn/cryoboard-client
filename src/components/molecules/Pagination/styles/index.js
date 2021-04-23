import styled from "styled-components";
export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const PaginationItem = styled.span`
  padding: 8px;
  background-color: ${(props) => (props.active ? props.theme.colors.primary : "transparent")};
  width: ${props => props.theme.spacing.xxlarge}rem;
  height: ${props => props.theme.spacing.xxlarge}rem;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #322f5b;
  }
`;
