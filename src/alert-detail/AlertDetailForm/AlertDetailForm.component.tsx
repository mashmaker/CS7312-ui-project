import { Grid, Stack, TextField, Typography } from '@mui/material'
import { Alert, AlertSeverity, AlertState } from '../../alert/alert.type'
import AlertDetailFormActionMenu from './AlertDetailFormActionMenu.component'
import AlertSeverityMenu from './AlertSeverityMenu.component'
import { DateTime } from 'luxon'

export type AlertDetailFormProps = {
  alert: Alert
  onTriage: () => void
  onInvestigate: () => void
  onCloseStart: () => void
  onReview: () => void
  onEscalate: () => void
  onChangeSeverity: (newSeverity: AlertSeverity) => void
}

const AlertDetailForm = ({
  alert,
  onTriage,
  onInvestigate,
  onCloseStart,
  onReview,
  onEscalate,
  onChangeSeverity
}: AlertDetailFormProps) => (
  <>
    <Grid container>
      <Grid size={10}>
        <Typography variant="h5" fontWeight="bold">
          {alert.title}
        </Typography>
        <Typography variant="subtitle1">
          Created: {DateTime.fromJSDate(alert.createdOn).toRFC2822()}
        </Typography>
      </Grid>

      <Grid size={2} textAlign="right">
        <AlertSeverityMenu
          severity={alert.severity}
          onChangeSeverity={onChangeSeverity}
        />
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid size={4} marginTop={1}>
        <AlertDetailFormActionMenu
          state={alert.state}
          onTriage={onTriage}
          onInvestigate={onInvestigate}
          onCloseStart={onCloseStart}
          onReview={onReview}
          onEscalate={onEscalate}
        />
      </Grid>

      <Grid size={4}></Grid>

      <Grid size={4}>
        <Stack direction="column" spacing={2}>
          <TextField
            label="Assigned To"
            disabled
            value={alert.assignedTo || ''}
            fullWidth
          />

          {alert.state > 1 && (
            <TextField
              label="Triaged By"
              disabled
              value={alert.triaged?.user || ''}
              fullWidth
            />
          )}

          {alert.state > 3 && (
            <TextField
              label="Reviewer"
              disabled
              value={alert.reviewed?.user || ''}
              fullWidth
            />
          )}
        </Stack>
      </Grid>

      {alert.state === AlertState.Closed && (
        <Grid container size={12} spacing={2}>
          <Grid size={4}>
            <TextField
              label="Closed By"
              disabled
              value={alert.closed?.user || ''}
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <TextField
              multiline
              minRows={3}
              value={alert.closed?.notes || ''}
              label="Close Notes"
              fullWidth
              disabled
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  </>
)

export default AlertDetailForm
