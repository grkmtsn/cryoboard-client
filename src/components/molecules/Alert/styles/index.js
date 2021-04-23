import styled from "styled-components";
import type from "./type";

export const AlertWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  border-radius: 6px;

  ${(props) => type[props.type]}
`;
