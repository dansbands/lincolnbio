import styled from "styled-components";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const buttonArr = [];
  for (let index = 0; index < totalPages; index++) {
    const page = index + 1;
    const isActive = page === currentPage;

    buttonArr[index] = (
      <PaginationButton
        value={page}
        onClick={(e) => setCurrentPage(parseInt(e.target.value))}
        $active={isActive}
      >
        {page}
      </PaginationButton>
    );
  }

  const BackButton = () => (
    <PaginationButton value onClick={() => setCurrentPage(currentPage - 1)}>
      <FontAwesomeIcon icon={faBackward} size="xl" />
    </PaginationButton>
  );
  
  const ForwardButton = () => (
    <PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>
      <FontAwesomeIcon icon={faForward} size="xl" />
    </PaginationButton>
  );

  return (
    <>
      {currentPage > 1 && <BackButton />}
      {buttonArr.splice(currentPage - 1, 3)}
      {currentPage < totalPages && <ForwardButton />}
    </>
  );
};

export default Pagination;

const PaginationButton = styled.button`
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-bottom: ${({ $active, theme }) =>
    $active ? `1px solid ${theme.colors.secondary}` : "none"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.secondary : theme.colors.primary};
`;
