import styled from 'styled-components'

export const Footer = styled.footer`
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
