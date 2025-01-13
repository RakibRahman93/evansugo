"use client";
import React, { useState } from "react";

export default function Pagination({ className }) {
  const [activePage, setActivePage] = useState(1); // Initialize active page

  // Function to handle page change
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div
      className={className ? className : "pagination justify-content-center"}
    >
      {/* Previous Page Button */}
      <a
        onClick={() => activePage > 1 && handlePageChange(activePage - 1)}
        className={activePage === 1 ? "disabled" : ""}
      >
        <i className="mi-chevron-left" />
        <span className="visually-hidden">Previous page</span>
      </a>

      {/* Page Number 1 */}
      <a
        onClick={() => handlePageChange(1)}
        className={activePage === 1 ? "active" : ""}
      >
        1
      </a>

      {/* Page Number 2 */}
      <a
        onClick={() => handlePageChange(2)}
        className={activePage === 2 ? "active" : ""}
      >
        2
      </a>

      {/* Page Number 3 */}
      <a
        onClick={() => handlePageChange(3)}
        className={activePage === 3 ? "active" : ""}
      >
        3
      </a>

      {activePage > 4 && activePage < 8 && (
        <span className="no-active">...</span>
      )}

      {activePage > 3 && activePage < 8 && (
        <a className={"active"}>{activePage}</a>
      )}

      {/* Ellipsis */}
      <span className="no-active">...</span>
      {activePage == 8 && <a className={"active"}>{8}</a>}
      {/* Page Number 9 */}
      <a
        onClick={() => handlePageChange(9)}
        className={activePage === 9 ? "active" : ""}
      >
        9
      </a>

      {/* Next Page Button */}
      <a
        onClick={() => activePage < 9 && handlePageChange(activePage + 1)}
        className={activePage === 9 ? "disabled" : ""}
      >
        <i className="mi-chevron-right" />
        <span className="visually-hidden">Next page</span>
      </a>
    </div>
  );
}
