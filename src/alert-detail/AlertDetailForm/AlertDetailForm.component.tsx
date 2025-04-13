import { Grid, TextField, Typography } from "@mui/material";
import { Alert, AlertSeverity, AlertState } from "../../alert/alert.type";
import AlertDetailFormQuickAction from "./AlertDetailFormQuickAction.component";
import AlertSeverityMenu from "./AlertSeverityMenu.component";

export type AlertDetailFormProps = {
  alert: Alert
  onInvestigate: () => void;
  onCloseStart: () => void;
  onReview: () => void;
  onEscalate: () => void;
  onChangeSeverity: (newSeverity: AlertSeverity) => void;
}

const AlertDetailForm = ({
  alert,
  onInvestigate,
  onCloseStart,
  onReview,
  onEscalate,
  onChangeSeverity,
}: AlertDetailFormProps) => (
  <>
    <Grid container>
      <Grid size={10}>
        <Typography variant="h5" fontWeight="bold">{alert.title}</Typography>
        <Typography variant="subtitle1" sx={{ paddingLeft: 2 }}>Created: {alert.createdDate}</Typography>
      </Grid>

      <Grid size={2}>
        <AlertSeverityMenu severity={alert.severity} onChangeSeverity={onChangeSeverity} />
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid size={4} marginTop={1}>
        <AlertDetailFormQuickAction
          state={alert.state}
          onInvestigate={onInvestigate}
          onCloseStart={onCloseStart}
          onReview={onReview}
          onEscalate={onEscalate}
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
