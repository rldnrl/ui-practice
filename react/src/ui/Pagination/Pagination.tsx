import React from "react";
import { paginationStyle } from "./Pagination.style";

type PaginationProps = {
  perPage: number;
  total: number;
  currentPage: number;
  pageGroupSize: number;
  onPaginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  perPage,
  total,
  currentPage,
  pageGroupSize,
  onPaginate,
}) => {
  const totalPages = Math.ceil(total / perPage);
  const currentGroup = Math.ceil(currentPage / pageGroupSize);

  const pageNumbers = Array.from({ length: Math.ceil(total / perPage) }, (_, i) => i + 1);

  const groupStart = (currentGroup - 1) * pageGroupSize;
  const groupEnd = Math.min(groupStart + pageGroupSize, totalPages);
  const pagesInGroup = pageNumbers.slice(groupStart, groupEnd);

  return (
    <nav>
      <ul className={paginationStyle.container}>
        <li className={paginationStyle.list()}>
          <button
            onClick={() => onPaginate(currentPage - 1)}
            className={paginationStyle.button}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pagesInGroup.map((page) => (
          <li
            key={page}
            className={paginationStyle.list(currentPage === page)}
          >
            <button
              onClick={() => onPaginate(page)}
              className={paginationStyle.button}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={paginationStyle.list()}>
          <button
            className={paginationStyle.button}
            onClick={() => onPaginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length - 1}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
