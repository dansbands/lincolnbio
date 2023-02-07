import styled from "styled-components";

import tipjar from './assets/tipjar2.svg'
import venmo from './assets/venmo.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaypal,
  faInstagram,
  faFacebook,
  faYoutube,
  faItunes,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPeopleArrows,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

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
        <QuickLinks>
          <QuickLinksLeft>
            <Heading4>
              <FontAwesomeIcon icon={faPeopleArrows} size="lg" /> Connect:
            </Heading4>
            <HorizontalLinks>
              <Link href="http://www.instagram.com/dansbands">
                <LinkContent>
                  <FontAwesomeIcon icon={faInstagram} size="6x" />
                  <div>Instagram</div>
                </LinkContent>
              </Link>
              <Link href="http://www.facebook.com/danodeamusic">
                <LinkContent>
                  <FontAwesomeIcon icon={faFacebook} size="6x" />
                  <div>Facebook</div>
                </LinkContent>
              </Link>
              <Link href="http://www.youtube.com/dansbands">
                <LinkContent>
                  <FontAwesomeIcon icon={faYoutube} size="6x" />
                  <div>YouTube</div>
                </LinkContent>
              </Link>
            </HorizontalLinks>
          </QuickLinksLeft>
          <QuickLinksRight>
            <Heading4>
              <FontAwesomeIcon icon={faHeadphones} size="lg" /> Listen:
            </Heading4>
            <HorizontalLinks>
              <Link href="https://music.apple.com/us/artist/dan-odea/410221391">
                <LinkContent>
                  <FontAwesomeIcon icon={faItunes} size="6x" />
                  <div>Apple Music</div>
                </LinkContent>
              </Link>
              <Link href="https://open.spotify.com/artist/748sWPyuNgpL0ojyVQ5ziM">
                <LinkContent>
                  <FontAwesomeIcon icon={faSpotify} size="6x" />
                  <div>Spotify</div>
                </LinkContent>
              </Link>
            </HorizontalLinks>
          </QuickLinksRight>
        </QuickLinks>
        <TipLinks>
          <Heading4>
            <img src={tipjar} alt="tip jar icon" />
            Tips are Always Appreciated!
          </Heading4>
          <TipButton>
            <Link href="https://venmo.com/u/Dan-ODea-1">
              <img src={venmo} alt="venmo icon" />
              Venmo
            </Link>
          </TipButton>
          <TipButton>
            <Link href="https://paypal.me/danodeamusic?country.x=US&locale.x=en_US">
              <FontAwesomeIcon icon={faPaypal} /> PayPal
            </Link>
          </TipButton>
        </TipLinks>
      </Body>
    </Container>
  );
}

export default App;

const background = "white";
const text = "black";
const link = "orange";
const divider = "darkgrey";

// const background = "black";
// const text = "white";
// const link = "#e7d3b1";

const Container = styled.div`
  font-family: roboto;
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${background};
  color: ${text};
  /* background: black;
  color: white; */
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  padding: 50px;
  border-bottom: 1px solid ${text};
  display: flex;
`;

const HeaderOdd = styled.div`
  letter-spacing: 10px;
  color: ${link};
`;

const HeaderEven = styled.div`
  letter-spacing: 10px;
`;

const Body = styled.div`
  font-weight: 400;
  /* font-weight: 100; */
`;

const Heading4 = styled.h4`
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${divider};

  & img {
    height: 30px;
    margin-right: 10px;
    margin-bottom: -5px;
  }
`;

const HorizontalLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuickLinks = styled.div`
  /* border: 1px solid ${text}; */
  /* padding: 20px; */
  display: flex;
  flex-direction: row;
  /* width: 40vw; */
  margin-bottom: 20px;
`;
const QuickLinksLeft = styled.div`
  /* border: 1px solid ${text}; */
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  width: 55%;
  flex-basis: 3;
`;
const QuickLinksRight = styled.div`
  /* border: 1px solid ${text}; */
  /* padding: 20px; */
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  flex-basis: 2;
  width: 35%;
  /* width: 30vw; */
`;

const TipLinks = styled.div`
  border: 1px solid ${text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 80vw;
  justify-content: space-between;

  & img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    margin-bottom: -5px;
    fill: ${link};
    color: ${link};
  }
`;

const Link = styled.a`
  color: ${link};
  text-decoration: none;
`;

const LinkContent = styled.div`
  border: 1px solid ${link};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 110px;
`;

const TipButton = styled.div`
  border: 1px solid ${text};
  border-radius: 25px;
  text-align: center;
  padding: 20px;
  margin: 10px 0;
`;
