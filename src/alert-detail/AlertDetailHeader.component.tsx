import { Box, Button, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const AlertDetailHeader = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="h4">Alert Details</Typography>

      <Button component={NavLink} to="/" variant="outlined">
        <ArrowBackIcon sx={{ marginRight: 2 }} />
        <Typography>Back to List</Typography>
      </Button>
    </Box>
  )
}

export default AlertDetailHeader
