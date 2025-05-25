import { CharactersContext } from "../CharactersContext";
import { useContext, useState } from "react";
import "../styles/Pagination.css";

function Pagination() {
  const { setCurrentPage, currentPage } = useContext(CharactersContext);
  const [page, setPage] = useState(currentPage);

  const handleNextPage = () => {
    setPage((nextPage) => {
      const nextPageValue = nextPage + 1 <= 9 ? nextPage + 1 : 9;
      setCurrentPage(nextPageValue);
      return nextPageValue;
    });
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => {
      const prevPageValue = prevPage - 1 >= 1 ? prevPage - 1 : 1;
      setCurrentPage(prevPageValue);
      return prevPageValue;
    });
  };

  return (
    <div>
      <button className="page-button" onClick={handlePreviousPage}>
        Previous
      </button>
      <span className="pagination-text">Page No: {page}</span>
      <button className="page-button" onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
