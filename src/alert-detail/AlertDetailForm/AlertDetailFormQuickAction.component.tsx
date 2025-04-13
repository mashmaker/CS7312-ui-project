import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { AlertState } from "../../alert/alert.type";
import CloseIcon from "@mui/icons-material/Close";

type AlertDetailFormQuickActionProps = {
  state: AlertState;
  onInvestigate: () => void;
  onClose: () => void;
  onReview: () => void;
  onEscalate: () => void;
};

const AlertDetailFormQuickAction = ({
  state,
  onInvestigate,
  onReview,
  onEscalate,
  onClose,
}: AlertDetailFormQuickActionProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null);

  const handleInvestigateAlertClick = () => {
    onInvestigate();
    handleMenuClose();
  };

  const handleReviewClick = () => {
    onReview();
    handleMenuClose();
  };

  const handleEscalateClick = () => {
    onEscalate();
    handleMenuClose();
  };

  const handleCloseAlertClick = () => {
    onClose();
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

        {state === AlertState.Review && (
          <MenuItem onClick={handleEscalateClick} disableRipple>
            <Typography>Escalate</Typography>
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
