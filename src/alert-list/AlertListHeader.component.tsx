import { Box, Stack, Switch, Typography } from "@mui/material";

export type AlertListHeaderProps = {
  showClosed: boolean;
  onToggleShowClosed: (showClosed: boolean) => void;
  numNewAlerts: number;
}

const AlertListHeader = ({
  showClosed,
  onToggleShowClosed,
  numNewAlerts,
}: AlertListHeaderProps) => {
  const handleToggleShowClosed = () => onToggleShowClosed(!showClosed);

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