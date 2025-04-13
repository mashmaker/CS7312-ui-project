import { Box, Stack, Switch, Typography } from "@mui/material";
import SAMPLE_ALERTS from "../alert/sample-alerts";
import { AlertState } from "../alert/alert.type";

export type AlertListHeaderProps = {
  showClosed: boolean;
  onToggleShowClosed: (showClosed: boolean) => void;
}

const AlertListHeader = ({
  showClosed,
  onToggleShowClosed,
}: AlertListHeaderProps) => {
  const handleToggleShowClosed = () => onToggleShowClosed(!showClosed);
  const numNewAlerts = SAMPLE_ALERTS.filter((alert) => alert.state === AlertState.New).length;

  return (
    <Box display="flex" justifyContent="space-between">
      <Stack direction="row" spacing={8}>
        <Typography variant="h4">Alerts List</Typography>

        <Box display="flex" alignItems="center">
          <Switch onClick={handleToggleShowClosed} checked={showClosed} />
          <Typography>Show Closed Alerts</Typography>
        </Box>
      </Stack>

      <Typography variant="h5"># New Alerts: {numNewAlerts}</Typography>
    </Box>
  )
}

export default AlertListHeader