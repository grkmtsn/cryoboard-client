import React, { useState } from "react";
import { Pagination } from "../..";
import { TableWrapper, StyledTable, Th, Td } from "./styles";

import { paginate } from "../../../helpers";

const Table = ({ dataSource, columns, pageSize = 10 }) => {
  const [currentPage, setCurrentPage] = useState(
    Number(localStorage.getItem("currentPage")) || 1
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };

  const getPageData = () => {
    const paginationData = paginate(dataSource, currentPage, pageSize);
    return { totalCount: dataSource.length, data: paginationData };
  };

  const { totalCount, data } = getPageData();

  return (
    <>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              {columns.map((column) => (
                <Th key={column.key}>{column.title}</Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {columns.map((column) => (
                  <Td key={column.key} width={column.width}>
                    {column.render
                      ? column.render(item[column.dataIndex], item)
                      : item[column.dataIndex]}
                  </Td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Table;
