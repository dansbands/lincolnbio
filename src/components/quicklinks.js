import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faFacebook,
  faYoutube,
  faItunes,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPeopleArrows,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "./section-heading";
import { breakpoint } from "../util/device";
import { useMediaQuery } from "../hooks/useMediaQuery";

const QuickLinks = () => {
  const isMobile = useMediaQuery();
  const iconSize = isMobile ? "4x" : "6x";

  return (
    <Container>
      <QuickLinksLeft>
        <SectionHeading
          icon={() => <StyledFAIcon icon={faPeopleArrows} size="lg" />}
          caption=" Connect:"
        />
        <HorizontalLinks>
          <Link href="http://www.instagram.com/dansbands">
            <LinkContent>
              <FontAwesomeIcon icon={faSquareInstagram} size={iconSize} />
              <div>Instagram</div>
            </LinkContent>
          </Link>
          <Link href="http://www.facebook.com/danodeamusic">
            <LinkContent>
              <FontAwesomeIcon icon={faFacebook} size={iconSize} />
              <div>Facebook</div>
            </LinkContent>
          </Link>
          <Link href="http://www.youtube.com/dansbands">
            <LinkContent>
              <FontAwesomeIcon icon={faYoutube} size={iconSize} />
              <div>YouTube</div>
            </LinkContent>
          </Link>
        </HorizontalLinks>
      </QuickLinksLeft>
      <QuickLinksRight>
        <SectionHeading
          icon={() => <StyledFAIcon icon={faHeadphones} size="lg" />}
          caption=" Listen:"
        />
        <HorizontalLinks>
          <Link href="https://music.apple.com/us/artist/dan-odea/410221391">
            <LinkContent>
              <FontAwesomeIcon icon={faItunes} size={iconSize} />
              <div>Apple Music</div>
            </LinkContent>
          </Link>
          <Link href="https://open.spotify.com/artist/748sWPyuNgpL0ojyVQ5ziM">
            <LinkContent>
              <FontAwesomeIcon icon={faSpotify} size={iconSize} />
              <div>Spotify</div>
            </LinkContent>
          </Link>
        </HorizontalLinks>
      </QuickLinksRight>
    </Container>
  );
};

export default QuickLinks;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  margin-bottom: 20px;

  ${breakpoint("tablet")} {
    width: 80vw;
  }
`;

const QuickLinksLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  flex-basis: 3;
`;

const QuickLinksRight = styled.div`
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  flex-basis: 2;
  width: 35%;
`;

const HorizontalLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
`;

const LinkContent = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40px;
  font-size: 8px;
  justify-content: center;
  text-align: center;

  ${breakpoint("tablet")} {
    min-width: 110px;
    font-size: 16px;
    padding: 10px;
  }
`;

const StyledFAIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
