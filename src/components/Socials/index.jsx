import { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import * as Styled from './styles'

export default function Socials({ iconSize }) {
  const theme = useContext(ThemeContext);

  return (
    <Styled.List>
      <Styled.Item>
        <SocialIcon url="https://www.instagram.com/flpfar" style={{ height: iconSize, width: iconSize }} fgColor={theme.colors.primary}/>
      </Styled.Item>
      <Styled.Item>
        <SocialIcon url="https://www.facebook.com/flpfar" style={{ height: iconSize, width: iconSize }} fgColor={theme.colors.primary}/>
      </Styled.Item>
      <Styled.Item>
        <SocialIcon url="https://www.linkedin.com/flpfar" style={{ height: iconSize, width: iconSize }} fgColor={theme.colors.primary}/>
      </Styled.Item>
    </Styled.List>
  )
}