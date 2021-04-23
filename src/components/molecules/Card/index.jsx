import React from "react";
import { ArrowUp, ArrowDown } from "@styled-icons/feather";

import { Space, Text, Heading } from "../..";
import { CardWrapper, Body } from "./styles";

const Card = ({ item, active, onClick }) => {
  return (
    <CardWrapper active={active} onClick={() => onClick(item)}>
      {item.icon}
      <Body>
        <Space direction="vertical">
          <Space align="end">
            <Heading as="h4">{item.count}</Heading>
            <Text level={2}>{item.title}</Text>
          </Space>
          <Space>
            {item.difference.charAt(0) === "+" ? (
              <ArrowUp size={24} color="#fff" />
            ) : (
              <ArrowDown size={24} color="#fff" />
            )}
            <Text>{item.difference}</Text>
          </Space>
        </Space>
      </Body>
    </CardWrapper>
  );
};

export default Card;
