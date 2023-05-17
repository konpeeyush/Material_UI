import React from 'react'
import { Container } from './Components/Styles/Container.styled'
import Header from './Components/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Components/Styles/Global'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </ThemeProvider>
  )

}

export default App