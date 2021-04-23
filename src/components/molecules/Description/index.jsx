import React from "react";
import { Heading, Text } from "../..";
import { DescriptionWrapper, DescriptionItem } from "./styles";

const Description = ({ children }) => {
  return <DescriptionWrapper>{children}</DescriptionWrapper>;
};

const Item = ({ label, value }) => {
  return (
    <DescriptionItem>
      <Heading as="h6">{label}</Heading>
      <Text level={2}>{value}</Text>
    </DescriptionItem>
  );
};

Description.Item = Item;

export default Description;
