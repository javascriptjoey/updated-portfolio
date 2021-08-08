import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: white;

  transition: color 0.5s ease;
  :hover {
    color: orange;
  }
`;
