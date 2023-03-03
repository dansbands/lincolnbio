import { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const scrollThreshold = 200;

    if (scrolled > scrollThreshold) {
      setVisible(true);
    } else if (scrolled <= scrollThreshold) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <BackButton $showScrollButton={visible} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faCaretUp} size="xl" />
    </BackButton>
  );
};

export default BackToTop;

const BackButton = styled.button`
  display: ${({ $showScrollButton }) => ($showScrollButton ? "block" : "none")};
  position: fixed;
  right: 25px;
  bottom: 50px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: ${({ theme }) => `1px solid ${theme.colors.background}`};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.background};
`;
