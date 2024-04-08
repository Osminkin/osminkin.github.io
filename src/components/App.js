import React from "react"

import { ThemeProvider } from "./ThemeContext"
import GlobalStyles from "./GlobalStyles"
import * as WebFont from "webfontloader"

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default App
