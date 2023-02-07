import styled from "styled-components";
import theme from "./theme";

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SectionHeading = ({ image, altText, caption, icon, isCollapsible, isOpen }) => {
  return (
    <Heading4>
      {isCollapsible && (
        <FontAwesomeIcon icon={faCaretRight} rotation={isOpen && 90} />
      )}
      <Content $isCollapsible={isCollapsible}>
        {image && <img src={image} alt={altText} />}
        {icon && icon()}
        {caption}
      </Content>
    </Heading4>
  );
};

export default SectionHeading;

const { divider } = theme;

const Heading4 = styled.h4`
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${divider};

  & img {
    height: 30px;
    margin-right: 10px;
  }
`;

const Content = styled.span`
  margin-left: ${({ $isCollapsible }) => $isCollapsible ? '10px' : 0};
`;
