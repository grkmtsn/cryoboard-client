import styled from "styled-components";

export const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #423d7e;

  > h6 {
    padding: ${(props) => props.theme.spacing.large}rem;
    width: 30rem;
    font-weight: bold;
    text-align: right;
  }

  > p {
    padding: ${(props) => props.theme.spacing.large}rem;
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    flex: 1;
  }
`;
export const DescriptionWrapper = styled.div`
  border: 1px solid #423d7e;
  border-radius: 6px;

  > ${DescriptionItem}:first-child {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;

    > h6 {
      border-top-left-radius: 6px;
    }
  }

  > ${DescriptionItem}:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom: none;
    > h6 {
      border-bottom-left-radius: 6px;
    }
  }
`;
