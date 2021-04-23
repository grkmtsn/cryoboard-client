import styled from "styled-components";
import color from "./color";
import { setLevel } from "./level";

export const StyledText = styled.p`
  font-style: normal;
  margin: 0;

  ${(props) => color[props.color]}
  ${(props) => setLevel(props.level)}
`;
