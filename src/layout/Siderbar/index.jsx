import React from "react";
import { Activity, List } from "@styled-icons/feather";

import { Logo } from "../../components";
import { StyledSidebar } from "./styles";
import { NavItem } from "../../components";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <NavItem icon={Activity} text="Charts" to="/" />
      <NavItem icon={List} text="Reports" to="/reports" />
    </StyledSidebar>
  );
};

export default Sidebar;
