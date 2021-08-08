import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: white;
  text-shadow: 1px 2px 3px black;

  :hover {
    color: orange;
  }
`;
