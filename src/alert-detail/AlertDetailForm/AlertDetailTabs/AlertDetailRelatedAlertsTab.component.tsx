import { Box } from '@mui/material'
import AlertListDataGrid from '../../../alert-list/AlertListDataGrid/AlertListDataGrid.component'
import { Alert } from '../../../alert/alert.type'

export type AlertDetailRelatedAlertsTabProps = {
  alert: Alert
}

const AlertDetailRelatedAlertsTab = ({
  alert
}: AlertDetailRelatedAlertsTabProps) => (
  <Box marginTop={2}>
    <AlertListDataGrid
      showClosed
      excludeId={alert.id}
      defaultQuery={`title=${alert.title}`}
    />
  </Box>
)

export default AlertDetailRelatedAlertsTab
