import React from "react";
import { LogoWrapper, LogoImage, LogoText } from "./styles";
import LogoSrc from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={LogoSrc} />
      <LogoText>Cryoboard</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
