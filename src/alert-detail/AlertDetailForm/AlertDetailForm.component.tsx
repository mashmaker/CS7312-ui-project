import { Grid, TextField, Typography } from "@mui/material";
import { Alert, AlertState } from "../../alert/alert.type";
import Severity from "../../shared/Severity.component";
import AlertDetailFormQuickAction from "./AlertDetailFormQuickAction.component";

export type AlertDetailFormProps = {
  alert: Alert
  onInvestigateAlert: () => void;
  onCloseAlert: () => void;
  onReviewAlert: () => void;
  onEscalateAlert: () => void;
}

const AlertDetailForm = ({
  alert,
  onInvestigateAlert,
  onCloseAlert,
  onReviewAlert,
  onEscalateAlert,
}: AlertDetailFormProps) => (
  <>
    <Grid container>
      <Grid size={10}>
        <Typography variant="h5" fontWeight="bold">{alert.title}</Typography>
        <Typography variant="subtitle1" sx={{ paddingLeft: 2 }}>Created: {alert.createdDate}</Typography>
      </Grid>

      <Grid size={2}>
        <Severity severity={alert.severity} />
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid size={4} marginTop={1}>
        <AlertDetailFormQuickAction
          state={alert.state}
          onInvestigateAlert={onInvestigateAlert}
          onCloseAlert={onCloseAlert}
          onReviewAlert={onReviewAlert}
          onEscalateAlert={onEscalateAlert}
        />
      </Grid>

      <Grid size={4}>
        <TextField
          label="Assigned To"
          disabled
          value={alert.assignedTo || ""}
          fullWidth />
      </Grid>

      <Grid size={4}>
        <TextField
          label="Triaged By"
          disabled
          value={alert.triagedBy || ""}
          fullWidth />
      </Grid>

      <Grid size={4}></Grid>

      <Grid size={4}>
        {alert.state === AlertState.Closed && (
          <TextField
            label="Closed By"
            disabled
            value={alert.closedBy || ""}
            fullWidth
          />
        )}
      </Grid>

      <Grid size={4}>
        <TextField
          label="Reviewed By"
          disabled
          value={alert.reviewedBy || ""}
          fullWidth
        />
      </Grid>
    </Grid>
  </>
)

export default AlertDetailForm;
