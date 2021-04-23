import React from "react";
import { StyledText } from "./styles";

const Text = ({ level = 1, color = "white", children, ...rest }) => (
  <StyledText level={level} color={color} {...rest}>
    {children}
  </StyledText>
);

export default Text;
