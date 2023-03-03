import styled, { css } from "styled-components";

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionHeading = ({
  renderIcon,
  caption,
  icon,
  isCollapsible,
  isOpen,
  onClick,
  renderSort,
}) => {
  return (
    <>
      <Heading4>
        <Content $isCollapsible={isCollapsible}>
          <ContentLeft onClick={onClick}>
            {isCollapsible && (
              <StyledFAIcon
                icon={faCaretRight}
                rotation={isOpen ? 90 : 0}
                size="1x"
              />
            )}
            {renderIcon && renderIcon()}
            {icon && icon()}
            {caption}
          </ContentLeft>
          <ContentRight>{isOpen && renderSort && renderSort()}</ContentRight>
        </Content>
      </Heading4>
    </>
  );
};

export default SectionHeading;

const Heading4 = styled.h4`
  display: flex;
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.divider}`};

  & img {
    height: 30px;
    margin-right: 10px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      cursor: pointer;
    `}
`;

const ContentLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ContentRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledFAIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 26px;
`;
