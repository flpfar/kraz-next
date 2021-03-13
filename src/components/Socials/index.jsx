import { SocialIcon } from 'react-social-icons';
import { theme } from '../../pages/styles/globals';
import * as Styled from './styles'

export default function Socials({ iconSize }) {
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