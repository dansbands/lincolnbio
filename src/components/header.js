import styled from "styled-components";
import { useMediaQuery } from "../hooks/useMediaQuery.js";
import { breakpoint } from "../util/device.js";

// @TODO: This could be a split/map situation
const Header = () => {
  const isMobile = useMediaQuery();

  return (
    <Container>
      <MobileTop>
        <HeaderOdd>DAN</HeaderOdd>
        <HeaderEven>O'DEA</HeaderEven>
        <HeaderOdd>MUSIC</HeaderOdd>
      </MobileTop>
      {isMobile ? (
        <>
          <br />
        </>
      ) : (
        <Divider>|</Divider>
      )}
      <MobileBottom>
        <HeaderOdd>DANS</HeaderOdd>
        <HeaderEven>BANDS</HeaderEven>
        <HeaderOdd>.COM</HeaderOdd>
      </MobileBottom>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  font-size: 16px;
  font-family: monoton;
  padding: 35px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.divider}`};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  ${breakpoint("tablet")} {
    font-size: 18px;
    flex-direction: row;
  }

  ${breakpoint("laptop")} {
    font-size: 24px;
  }
`;

const HeaderOdd = styled.div`
  letter-spacing: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const HeaderEven = styled.div`
  letter-spacing: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Divider = styled.div`
  font-size: 200%;
  letter-spacing: 10px;
  color: ${({ theme }) => theme.colors.primary};

  ${breakpoint("tablet")} {
    line-height: 25px;
  }

  ${breakpoint("laptop")} {
    line-height: 40px;
  }
`;

const MobileTop = styled.div`
  display: flex;
  justify-content: center;
`;
const MobileBottom = styled.div`
  display: flex;
  justify-content: center;
`;
