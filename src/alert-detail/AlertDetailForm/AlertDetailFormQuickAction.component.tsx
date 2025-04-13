import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { AlertState } from "../../alert/alert.type";
import CloseIcon from "@mui/icons-material/Close";

type AlertDetailFormQuickActionProps = {
  state: AlertState;
  onInvestigateAlert: () => void;
  onCloseAlert: () => void;
  onReviewAlert: () => void;
  onEscalateAlert: () => void;
};

const AlertDetailFormQuickAction = ({
  state,
  onInvestigateAlert,
  onReviewAlert,
  onEscalateAlert,
  onCloseAlert,
}: AlertDetailFormQuickActionProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null);

  const handleInvestigateAlertClick = () => {
    onInvestigateAlert();
    handleMenuClose();
  };

  const handleReviewClick = () => {
    onReviewAlert();
    handleMenuClose();
  };

  const handleEscalateClick = () => {
    onEscalateAlert();
    handleMenuClose();
  };

  const handleCloseAlertClick = () => {
    onCloseAlert();
    handleMenuClose();
  };

  return (
    <>
      <Button onClick={handleMenuClick} variant="contained" size="large">
        <Typography>Actions</Typography>
      </Button>

      <Menu
        open={anchorEl !== null}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {state === AlertState.Triage && (
          <MenuItem onClick={handleInvestigateAlertClick} disableRipple>
            <Typography>Start Investigation</Typography>
            <NavigateNextIcon fontSize="small" />
          </MenuItem>
        )}

        {state === AlertState.Investigating && (
          <MenuItem onClick={handleReviewClick} disableRipple>
            <Typography>Request Review</Typography>
            <NavigateNextIcon fontSize="small" />
          </MenuItem>
        )}

        <MenuItem onClick={handleCloseAlertClick} disableRipple>
          <Typography>Close</Typography>
          <CloseIcon />
        </MenuItem>
      </Menu>
    </>
  )
};

export default AlertDetailFormQuickAction;
