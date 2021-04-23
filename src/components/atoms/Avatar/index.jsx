import React from "react";
import { StyledAvatar } from "./styles";
import { User } from "@styled-icons/feather";

const Avatar = ({ src, color = "primary", use = "default", ...rest }) => (
  <StyledAvatar src={src} color={color} use={use} {...rest}>
    {!src && <User size="30" color="#1c1941" />}
  </StyledAvatar>
);

export default Avatar;
