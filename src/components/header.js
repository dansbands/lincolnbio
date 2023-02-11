import styled from "styled-components";
import theme from "./theme.js";

// @TODO: This could be a split/map situation
const Header = () => {
  return (
    <Container>
      <HeaderOdd>DAN</HeaderOdd>
      <HeaderEven>O'DEA</HeaderEven>
      <HeaderOdd>MUSIC</HeaderOdd>
      <HeaderEven>|</HeaderEven>
      <HeaderOdd>DANS</HeaderOdd>
      <HeaderEven>BANDS</HeaderEven>
      <HeaderOdd>.COM</HeaderOdd>
    </Container>
  );
};

export default Header;

const { text, link } = theme;

const Container = styled.div`
  padding: 50px;
  border-bottom: 1px solid ${text};
  display: flex;
  justify-content: center;
`;

const HeaderOdd = styled.div`
  letter-spacing: 10px;
  color: ${link};
`;

const HeaderEven = styled.div`
  letter-spacing: 10px;
`;
