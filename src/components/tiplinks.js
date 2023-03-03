import styled, { useTheme } from "styled-components";

import { ReactComponent as Tipjar } from "../assets/tipjar2.svg";
import { ReactComponent as Venmo } from "../assets/venmo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import SectionHeading from "./section-heading";
import { breakpoint } from "../util/device";

const TipLinks = () => {
  const theme = useTheme();

  return (
    <Container>
      <SectionHeading
        renderIcon={() => (
          <StyledTipJar alt="tip jar icon" fill={theme.colors.primary} />
        )}
        caption="Tips are Always Appreciated!"
      />
      <Link href="https://venmo.com/u/Dan-ODea-1">
        <TipButton>
          <Venmo alt="venmo icon" fill={theme.colors.secondary} />
          Venmo
        </TipButton>
      </Link>
      <Link href="https://paypal.me/danodeamusic?country.x=US&locale.x=en_US">
        <TipButton>
          <FontAwesomeIcon icon={faPaypal} />PayPal
        </TipButton>
      </Link>
    </Container>
  );
};

export default TipLinks;

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90vw;

  ${breakpoint("tablet")} {
    width: 80vw;
  }
`;

const StyledTipJar = styled(Tipjar)`
  margin: 5px;
  height: 25px;
  width: 25px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-size: 20px;

  & svg {
    height: 25px;
    width: 25px;
    margin-right: 10px;
    margin-bottom: -5px;
  }
`;

const TipButton = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-radius: 25px;
  text-align: center;
  padding: 10px 20px;
  margin: 10px 0;
`;
