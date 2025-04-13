import { useState } from 'react'
import { Button, Divider, Menu, MenuItem, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

import { AlertState } from '../../alert/alert.type'
import CloseIcon from '@mui/icons-material/Close'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

type AlertDetailFormActionMenuProps = {
  state: AlertState
  onTriage: () => void
  onInvestigate: () => void
  onReview: () => void
  onEscalate: () => void
  onCloseStart: () => void
}

const AlertDetailFormActionMenu = ({
  state,
  onTriage,
  onInvestigate,
  onReview,
  onEscalate,
  onCloseStart
}: AlertDetailFormActionMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)

  const handleTriageClick = () => {
    onTriage()
    handleMenuClose()
  }

  const handleInvestigateAlertClick = () => {
    onInvestigate()
    handleMenuClose()
  }

  const handleReviewClick = () => {
    onReview()
    handleMenuClose()
  }

  const handleEscalateClick = () => {
    onEscalate()
    handleMenuClose()
  }

  const handleCloseAlertClick = () => {
    onCloseStart()
    handleMenuClose()
  }

  if (state === AlertState.Closed) {
    return <></>
  }

  return (
    <>
      <Button
        onClick={handleMenuClick}
        variant="contained"
        size="large"
        fullWidth
      >
        <Typography>Actions</Typography>
        <ArrowDropDownIcon />
      </Button>

      <Menu
        open={anchorEl !== null}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        elevation={0}
        slotProps={{
          paper: {
            sx: {
              width: '325px',
              marginTop: 1
            }
          }
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {state === AlertState.New && (
          <>
            <MenuItem onClick={handleTriageClick} disableRipple>
              <Typography>Start Triage</Typography>
              <NavigateNextIcon fontSize="small" />
            </MenuItem>

            <Divider />
          </>
        )}

        {state === AlertState.Triage && (
          <>
            <MenuItem onClick={handleInvestigateAlertClick} disableRipple>
              <Typography>Start Investigation</Typography>
              <NavigateNextIcon fontSize="small" />
            </MenuItem>

            <Divider />
          </>
        )}

        {state === AlertState.Investigating && (
          <>
            <MenuItem onClick={handleReviewClick} disableRipple>
              <Typography>Request Review</Typography>
              <NavigateNextIcon fontSize="small" />
            </MenuItem>

            <Divider />
          </>
        )}

        {state === AlertState.Review && (
          <>
            <MenuItem onClick={handleEscalateClick} disableRipple>
              <Typography>Escalate</Typography>
              <NavigateNextIcon fontSize="small" />
            </MenuItem>

            <Divider />
          </>
        )}

        <MenuItem onClick={handleCloseAlertClick} disableRipple>
          <Typography>Close</Typography>
          <CloseIcon />
        </MenuItem>
      </Menu>
    </>
  )
}

export default AlertDetailFormActionMenu
