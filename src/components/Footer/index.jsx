
import Socials from '../Socials'
import * as Styled from './styles'

export default function Footer() {
  return (
    <Styled.Footer>
      <p>Copyright &copy; 2021 - Kraz Digital</p>
      <Socials iconSize={30}/>
    </Styled.Footer>
  )
}