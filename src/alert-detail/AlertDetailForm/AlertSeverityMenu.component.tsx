import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { ALERT_SEVERITY_LABELS, AlertSeverity } from "../../alert/alert.type";
import Severity from "../../shared/Severity.component";
import { useState } from "react";

export type AlertSeverityMenuProps = {
  severity: AlertSeverity
  onChangeSeverity: (severity: AlertSeverity) => void;
}

const AlertSeverityMenu = ({
  severity,
  onChangeSeverity
}: AlertSeverityMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <Button onClick={handleMenuClick} sx={{ padding: 0, height: '35px', width: '150px', color: 'inherit' }}>
        <Severity severity={severity} />
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
        {Object.keys(ALERT_SEVERITY_LABELS).map((severityStr) => {
          const severity = Number(severityStr) as AlertSeverity; // typescript can't map this type correctly

          return (
            <MenuItem onClick={() => onChangeSeverity(severity)} disableRipple>
              <Typography>{ALERT_SEVERITY_LABELS[severity]}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  )
};

export default AlertSeverityMenu;
