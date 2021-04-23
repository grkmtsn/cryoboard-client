import styled, { css } from "styled-components";
import { setAlign } from "./align";
import { setSpaceAndDirection } from "./space";

export const StyledSpace = styled.div`
  display: inline-flex;
  ${(props) => setAlign(props.align)}
  ${(props) => setSpaceAndDirection(props.direction, props.size)}

  ${(props) =>
    props.wrap &&
    props.direction === "horizontal" &&
    css`
      flex-wrap: wrap;
      margin-bottom: -${(props) => props.theme.spacing.medium}rem;

      > * {
        margin-bottom: ${(props) => props.theme.spacing.medium}rem;
      }
    `}
`;
