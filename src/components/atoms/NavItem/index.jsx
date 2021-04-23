import React from "react";
import { StyledNavItem } from "./styles";

const NavItem = ({ icon: Icon, text, to }) => {
  return (
    <StyledNavItem exact to={to}>
      <Icon size={20} />
      {text}
    </StyledNavItem>
  );
};

export default NavItem;
