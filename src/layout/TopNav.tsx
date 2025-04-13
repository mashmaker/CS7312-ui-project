import { Box, Paper, Button, Typography, Stack } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import { NavLink } from 'react-router-dom'
import { useCallback } from 'react'

const TopNav = () => {
  const handleSettingsClick = useCallback(
    () => alert('not yet implemented'),
    []
  )

  return (
    <Paper>
      <Box
        component="header"
        display="flex"
        justifyContent="space-between"
        paddingY={2}
      >
        <Box display="flex" alignItems="center" paddingLeft={2}>
          <LockIcon sx={{ fontSize: 40 }} />
          <Typography display="block" variant="h5" marginLeft={2}>
            NextGen Security Incident Response
          </Typography>
        </Box>

        <Stack
          component="nav"
          direction="row"
          spacing={2}
          marginRight={2}
          alignItems="center"
        >
          <NavLink to="/">
            {({ isActive }) => (
              <Button variant={isActive ? 'contained' : 'outlined'}>
                <Typography>View List</Typography>
              </Button>
            )}
          </NavLink>

          <Button variant="outlined" onClick={handleSettingsClick}>
            <Typography>Settings</Typography>
          </Button>
        </Stack>
      </Box>
    </Paper>
  )
}

export default TopNav
