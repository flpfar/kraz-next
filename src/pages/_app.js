import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import * as Styled from './styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Styled.Globals />
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </>
  )
}

export default MyApp
