import React from "react";

const Pagination = ({ setCurrentpage, currentpage, totalpages }) => {
  return (
    <div className="flex items-center justify-evenly p-6">
      <button
        className="hover:text-blue-800 disabled:text-gray-500"
        onClick={() => setCurrentpage(currentpage - 1)}
        disabled={currentpage === 1}
      >
        prev
      </button>
      <span>
        {currentpage} of {totalpages}
      </span>
      <button
        className="hover:text-blue-800 disabled:text-gray-500"
        onClick={() => setCurrentpage(currentpage + 1)}
        disabled={currentpage === totalpages}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
