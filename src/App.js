import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header>
        <HeaderOdd>DAN</HeaderOdd>
        <HeaderEven>O'DEA</HeaderEven>
        <HeaderOdd>MUSIC</HeaderOdd>
        <HeaderEven>|</HeaderEven>
        <HeaderOdd>DANS</HeaderOdd>
        <HeaderEven>BANDS</HeaderEven>
        <HeaderOdd>.COM</HeaderOdd>
      </Header>
      <Body>
        <SocialLinks>
          <Link href="http://www.instagram.com/dansbands">Instagram</Link>
          <Link href="http://www.facebook.com/danodeamusic">Facebook</Link>
          <Link href="http://www.youtube.com/dansbands">YouTube</Link>
        </SocialLinks>
        <TipLinks>
          <Link href="">Venmo</Link>
          <Link href="">PayPal</Link>
        </TipLinks>
      </Body>
    </Container>
  );
}

export default App;

const Container = styled.div`
  font-family: roboto;
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  padding: 50px;
  border-bottom: 1px solid white;
  display: flex;
`;

const HeaderOdd = styled.div`
  letter-spacing: 10px;
  color: #e7d3b1;
`;

const HeaderEven = styled.div`
  letter-spacing: 10px;
`;

const Body = styled.div`
  font-weight: 100;
`;

const SocialLinks = styled.div`
  border: 1px solid white;
  padding: 20px;
  display: flex;
  width: 80vw;
  justify-content: space-between;
`;

const TipLinks = styled.div`
  border: 1px solid white;
  padding: 20px;
  display: flex;
  width: 80vw;
  justify-content: space-between;
`;

const Link = styled.a`
  color: orange;
  text-decoration: none;
`;
