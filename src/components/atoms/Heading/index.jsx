import React from "react";
import { StyledHeading } from "./styles";

const Heading = ({ as, invert = true, children, ...rest }) => (
  <StyledHeading as={as} invert={invert} {...rest}>
    {children}
  </StyledHeading>
);

export default Heading;
