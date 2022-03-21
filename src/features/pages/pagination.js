import React from "react";
import _ from "lodash";
import "./styles.css";
function Pagagination({ playercount, pageSize, onPageChange, currentPage }) {
  const pagesCount = Math.ceil(playercount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <>
      <nav>
        <ul className="main_pages">
          {pages.map((page) => (
            <li
              className={page === currentPage ? "pages active" : "pages"}
              key={page}
              onClick={() => onPageChange(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Pagagination;
