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
  renderSort,
}) => {
  return (
    <>
      <Heading4>
        <Content $isCollapsible={isCollapsible}>
          <ContentLeft onClick={onClick}>
            {isCollapsible && (
              <StyledFAIcon icon={faCaretRight} rotation={isOpen ? 90 : 0} />
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
`;

const ContentLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ContentRight = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledFAIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
