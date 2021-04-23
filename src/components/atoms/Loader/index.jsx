import React from "react";
import { Transition } from "react-transition-group";

import { Space, Text } from "../..";
import { Spinner, StyledLoader } from "./styles";

const Loader = ({ show = false }) => {
  return (
    <Transition in={show} timeout={500} unmountOnExit mountOnEnter>
      {(state) => (
        <StyledLoader state={state}>
          <Space direction="vertical">
            <Spinner size={32} />
            <Text>Loading..</Text>
          </Space>
        </StyledLoader>
      )}
    </Transition>
  );
};

export default Loader;
