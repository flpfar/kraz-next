import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import * as Styled from './styles/globals'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ theme }>
      <Styled.Globals />
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
