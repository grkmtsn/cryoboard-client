import React from "react";
import { Header } from "../../components";
import { StyledContent } from "./styles";

const Content = ({ children }) => {
  return (
    <StyledContent>
      <Header />
      {children}
    </StyledContent>
  );
};

export default Content;
