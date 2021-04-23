import styled, { keyframes } from "styled-components";
import { Loader } from "@styled-icons/feather";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(28, 26, 49, 0.71);
  backdrop-filter: blur(3px);
  transition: 0.5s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`;

export const Spinner = styled(Loader)`
  animation: ${rotate} 2s linear infinite;
`;
