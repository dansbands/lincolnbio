import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import theme from "./theme";
import SectionHeading from "./section-heading";

const QuickLinks = () => {
  return (
    <Container>
      <QuickLinksLeft>
        <SectionHeading
          icon={() => <FontAwesomeIcon icon={faPeopleArrows} size="lg" />}
          caption=" Connect:"
        />
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
        <SectionHeading
          icon={() => <FontAwesomeIcon icon={faHeadphones} size="lg" />}
          caption=" Listen:"
        />
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
    </Container>
  );
};

export default QuickLinks;

const { text, link } = theme;

const Container = styled.div`
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

const HorizontalLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  color: ${link};
  text-decoration: none;
`;

const LinkContent = styled.div`
  border: 3px solid ${link};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 110px;
`;
