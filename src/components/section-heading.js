import styled from "styled-components";

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionHeading = ({
  renderIcon,
  caption,
  icon,
  isCollapsible,
  isOpen,
  onClick,
}) => {
  return (
    <Heading4 onClick={onClick}>
      {isCollapsible && (
        <FontAwesomeIcon icon={faCaretRight} rotation={isOpen ? 90 : 0} />
      )}
      <Content $isCollapsible={isCollapsible}>
        {renderIcon && renderIcon()}
        {icon && icon()}
        {caption}
      </Content>
    </Heading4>
  );
};

export default SectionHeading;

const Heading4 = styled.h4`
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.divider}`};

  & img {
    height: 30px;
    margin-right: 10px;
  }
`;

const Content = styled.span`
  margin-left: ${({ $isCollapsible }) => ($isCollapsible ? "10px" : 0)};
`;
