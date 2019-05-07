import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Common } from '../styled-components';

const Pagination = memo(({ totalItems, itemsPerPage, currentPage }) => {
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const arr = [];

  for (let i = 0; i < totalPage; i += 1) {
    arr.push({
      pageNumber: i + 1,
      url: `/${i + 1}`,
    });
  }

  const { StyledPagination } = Common;

  return (
    <StyledPagination>
      {arr.map(({ pageNumber, url }) => (
        <li key={pageNumber}>
          {pageNumber === currentPage ? (
            <span className="page-number active">{pageNumber}</span>
          ) : (
            <Link className="page-number inactive" to={url}>
              {pageNumber}
            </Link>
          )}
        </li>
      ))}
    </StyledPagination>
  );
});

Pagination.defaultProps = {
  totalItems: 0,
  itemsPerPage: 0,
  currentPage: 1,
};

Pagination.propTypes = {
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
};

export default Pagination;
