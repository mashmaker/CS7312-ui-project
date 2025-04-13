import { Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import { ALERT_SEVERITY_LABELS, AlertSeverity } from '../../alert/alert.type'

const MediumSeverity = () => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFBA00',
      textAlign: 'center',
      fontWeight: 'bold'
    }}
  >
    <Typography textAlign="center" fontWeight="bold" color="#000">
      {ALERT_SEVERITY_LABELS[AlertSeverity.Medium]}
    </Typography>
    <KeyboardArrowDownIcon sx={{ color: '#000' }} />
  </Box>
)

export default MediumSeverity
