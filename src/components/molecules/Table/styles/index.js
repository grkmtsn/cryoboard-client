import styled from "styled-components";

export const TableWrapper = styled.div`
  border: 1px solid #534f87;
  border-right: 0;
  border-bottom: 0;
  margin-bottom: ${(props) => props.theme.spacing.medium}rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-radius: 2px 2px 0 0;
  border-collapse: separate;
  border-spacing: 0;

  thead tr th:first-child {
    border-top-left-radius: 6px;
  }

  thead tr th:last-child {
    border-top-right-radius: 6px;
  }

  tbody tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
  }

  tbody tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
  }
`;

export const Th = styled.th`
  border-right: 1px solid #534f87;
  color: #fff;
  font-weight: 700;
  text-align: left;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid #534f87;
  position: relative;
  padding: ${(props) => props.theme.spacing.medium}rem;
  overflow-wrap: break-word;
`;

export const Td = styled.td`
  border-right: 1px solid #534f87;
  color: #fff;
  text-align: left;
  border-bottom: 1px solid #534f87;
  position: relative;
  padding: ${(props) => props.theme.spacing.medium}rem;
  overflow-wrap: break-word;
`;
