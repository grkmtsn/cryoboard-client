import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #fff;
  transition: color 0.3s ease;
  margin-bottom: ${(props) => props.theme.spacing.large}rem;
  letter-spacing: 0.2px;
  font-weight: 700;

  > *:first-child {
    margin-right: ${(props) => props.theme.spacing.medium}rem;
  }

  &.active,
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
