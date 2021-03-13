import styled from 'styled-components'
import { theme } from '../../../pages/styles/globals'

export const Item = styled.li``;

export const Link = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  cursor: pointer;
  padding: 16px;
  text-transform: lowercase;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.textDark};
  }
`;
