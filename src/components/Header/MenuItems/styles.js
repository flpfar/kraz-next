import styled from 'styled-components'

export const Item = styled.li``;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  cursor: pointer;
  padding: 16px;
  text-transform: lowercase;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textDark};
  }
`;
