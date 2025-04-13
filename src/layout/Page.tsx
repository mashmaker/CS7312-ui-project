import { Box } from '@mui/material'
import TopNav from './TopNav'

export type PageProps = {
  children: React.ReactNode
}

const Page = ({ children }: PageProps) => (
  <>
    <TopNav />

    <Box paddingY={4} paddingX={32}>
      {children}
    </Box>
  </>
)

export default Page
