import React from "react";
import range from "lodash/range";
import { Space } from "../..";
import { PaginationWrapper, PaginationItem } from "./styles";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = range(1, pageCount + 1);

  return (
    <PaginationWrapper>
      <Space>
        {pages.map((page) => (
          <PaginationItem
            key={page}
            onClick={() => onPageChange(page)}
            active={page === currentPage}
          >
            {page}
          </PaginationItem>
        ))}
      </Space>
    </PaginationWrapper>
  );
};

export default Pagination;
