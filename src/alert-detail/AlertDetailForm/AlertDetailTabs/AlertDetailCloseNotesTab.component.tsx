import { Stack, TextField } from "@mui/material";
import { Alert, AlertState } from "../../../alert/alert.type";

export type AlertDetailCloseNotesTabProps = {
  alert: Alert,
};

const AlertDetailCloseNotesTab = ({ alert }: AlertDetailCloseNotesTabProps) => (
  <Stack direction="column" spacing={2}>
    {alert.state === AlertState.Closed && (
      <TextField
        label="Closed By"
        disabled
        value={alert.closedBy || ""}
        fullWidth
      />
    )}

    <TextField
      multiline
      minRows={3}
      value={alert.closeNotes || ""}
      label="Close Notes"
      fullWidth
      disabled
    />
  </Stack>
);

export default AlertDetailCloseNotesTab;
