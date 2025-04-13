import { ThemeProvider } from '@emotion/react'

import theme from './theme'
import router from './router'

import { RouterProvider } from 'react-router-dom'
import { SampleAlertProvider } from './alert/sample-alert.provider'

const App = () => (
  <ThemeProvider theme={theme}>
    <SampleAlertProvider>
      <RouterProvider router={router} />
    </SampleAlertProvider>
  </ThemeProvider>
)

export default App
