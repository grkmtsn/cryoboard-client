import styled from "styled-components";
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.spacing.xxxlarge}rem;
`;

export const LogoImage = styled.img`
  width: 50px;
`;

export const LogoText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.h5}rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;
