import styled from "styled-components";
import theme from "./theme";

import tipjar from "../assets/tipjar2.svg";
import venmo from "../assets/venmo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import SectionHeading from "./section-heading";

const TipLinks = () => {
  return (
    <Container>
      <SectionHeading
        image={tipjar}
        altText={"tip jar icon"}
        caption="Tips are Always Appreciated!"
      />
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
    </Container>
  );
};

export default TipLinks;

const { link } = theme;

const Container = styled.div`
  padding: 20px 0;
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

const TipButton = styled.div`
  border: 3px solid ${link};
  border-radius: 25px;
  text-align: center;
  padding: 20px;
  margin: 10px 0;
`;
