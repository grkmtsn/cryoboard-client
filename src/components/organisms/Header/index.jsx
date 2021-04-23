import React, { useContext } from "react";
import { Search, Grid, ChevronDown } from "@styled-icons/feather";
import { GlobalContext } from "../../../context/global";
import { Heading, Space, Text, Avatar } from "../..";
import { HeaderWrapper } from "./styles";

const Header = () => {
  const { state } = useContext(GlobalContext);
  return (
    <HeaderWrapper>
      <Heading as="h3">{state.pageTitle}</Heading>
      <Space size="xxlarge">
        <Search size={32} />
        <Grid size={32} />
        <Space>
          <Avatar />
          <Text>Görkem Tosun</Text>
          <ChevronDown size={24} />
        </Space>
      </Space>
    </HeaderWrapper>
  );
};

export default Header;
