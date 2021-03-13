import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;

  li:hover {
    filter: brightness(130%);
  }

  li + li {
    margin-left: 8px;
  }
`;

export const Item = styled.li``;