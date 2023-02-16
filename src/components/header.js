import styled from "styled-components";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

// @TODO: This could be a split/map situation
const Header = () => {
  const isMobile = useMediaQuery();

  return (
    <Container>
      <>
        <HeaderOdd>DAN</HeaderOdd>
        <HeaderEven>O'DEA</HeaderEven>
        <HeaderOdd>MUSIC</HeaderOdd>
      </>
      {isMobile ? (
        <>
          <br />
          <br />
        </>
      ) : (
        <HeaderEven>|</HeaderEven>
      )}
      <>
        <HeaderOdd>DANS</HeaderOdd>
        <HeaderEven>BANDS</HeaderEven>
        <HeaderOdd>.COM</HeaderOdd>
      </>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 50px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.divider}`};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HeaderOdd = styled.div`
  letter-spacing: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const HeaderEven = styled.div`
  letter-spacing: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;
