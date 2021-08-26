import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesPaginationArr = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {pagesPaginationArr.map((p) => (
        <span
          key={p}
          aria-hidden="true"
          onClick={() => changePage(p)}
          className={page === p ? 'page page__current' : 'page'}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
