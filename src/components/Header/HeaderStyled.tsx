import { Link } from 'react-router-dom';
import styled from 'styled-components';

type HeaderMainProps = {
  dark: boolean;
};

export const HeaderMain = styled.header<HeaderMainProps>`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  background: ${(props) => (props.dark ? 'black' : '#8e24aa')};
  justify-content: space-between;
  color: white;
`;

export const StyledLink = styled(Link)`
  color: white;
  &:hover {
    color: orange;
  }
`;
