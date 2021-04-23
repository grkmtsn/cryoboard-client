import React from "react";
import { useTheme } from "styled-components";
import { AlertTriangle, Check } from "@styled-icons/feather";

import { AlertWrapper } from "./styles";
import { Space, Text } from "../..";

const Alert = ({ type, message }) => {
  const theme = useTheme();
  const renderIcon = () => {
    switch (type) {
      case "success":
        return <Check size={24} color={theme.colors.success} />;
      case "error":
        return <AlertTriangle size={24} color={theme.colors.error} />;
    }
  };

  const renderMessage = () => {
    switch (type) {
      case "success":
        return <Text color="success">{message}</Text>;
      case "error":
        return <Text color="error">{message}</Text>;
    }
  };
  return (
    <AlertWrapper type={type}>
      <Space>
        {renderIcon()}
        {renderMessage()}
      </Space>
    </AlertWrapper>
  );
};

export default Alert;
