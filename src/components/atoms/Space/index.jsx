import React from "react";
import { StyledSpace } from "./styles";

const Space = ({
  direction = "horizontal",
  size = "small",
  align = "center",
  wrap = false,
  children,
  ...rest
}) => (
  <StyledSpace
    direction={direction}
    size={size}
    align={align}
    wrap={wrap ? 1 : 0}
    {...rest}
  >
    {children}
  </StyledSpace>
);

export default Space;
