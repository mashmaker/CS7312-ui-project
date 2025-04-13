import { ThemeProvider } from '@emotion/react'

import theme from './theme'
import router from "./router";

import { RouterProvider } from "react-router-dom";

const App = ()=> (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App
