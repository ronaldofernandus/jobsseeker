import React, { useState } from "react";

const PaginationComponent = ({
  jobsPerPage,
  totalJobs,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(currentPage);
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => {
                paginate(number);
                setActivePage(number);
              }}
              className="page-link p-3 text-black"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;
