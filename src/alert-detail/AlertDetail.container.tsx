import { useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import Page from '../layout/Page'
import AlertDetailHeader from './AlertDetailHeader.component'
import AlertDetailBreadcrumbs from './AlertDetailBreadcrumbs.component'
import AlertDetailForm from './AlertDetailForm/AlertDetailForm.component'
import {
  AlertSeverity,
  AlertState,
  EDRAlert,
  SIEMAlert
} from '../alert/alert.type'
import AlertDetailTabs from './AlertDetailForm/AlertDetailTabs/AlertDetailTabs.component'
import AlertDetailCloseConfirmationDialog from './AlertDetailForm/AlertDetailCloseConfirmationDialog'
import { useSampleAlerts } from '../alert/use-sample-alerts.hook'

const CURRENT_USER = 'Test User'

const AlertDetail = () => {
  const { id: idStr } = useParams()
  const id = useMemo(() => Number(idStr), [idStr])

  const { alerts, updateSampleAlert } = useSampleAlerts()
  const alert = alerts.find((alert) => alert.id === id)

  const [notification, setNotification] = useState<string | null>(null)
  const handleCloseNotification = () => setNotification(null)

  const [showCloseDialog, setShowCloseDialog] = useState<boolean>(false)

  const onTriage = useCallback(() => {
    updateSampleAlert(id, {
      state: AlertState.Triage,
      assignedTo: CURRENT_USER
    })

    setNotification("Alert updated to 'Triage'")
  }, [id, updateSampleAlert])

  const onInvestigate = useCallback(() => {
    updateSampleAlert(id, {
      state: AlertState.Investigating,
      assignedTo: CURRENT_USER,
      triaged: { user: CURRENT_USER, date: new Date() }
    })

    setNotification("Alert updated to 'Investigating'")
  }, [id, updateSampleAlert])

  const onReview = useCallback(() => {
    updateSampleAlert(id, {
      state: AlertState.Review,
      investigated: { user: CURRENT_USER, date: new Date() }
    })

    setNotification("Alert updated to 'Review'")
  }, [id, updateSampleAlert])

  const onChangeSeverity = useCallback(
    (newSeverity: AlertSeverity) => {
      updateSampleAlert(id, {
        severity: newSeverity
      })

      setNotification('You have changed the severity')
    },
    [id, updateSampleAlert]
  )

  const onEscalate = useCallback(() => {
    updateSampleAlert(id, {
      state: AlertState.Escalated,
      reviewed: { user: CURRENT_USER, date: new Date() }
    })

    setNotification("Alert updated to 'Escalate'")
  }, [id, updateSampleAlert])

  const onCloseStart = () => setShowCloseDialog(true)
  const onCloseCancel = () => setShowCloseDialog(false)
  const onClose = useCallback(
    (closeNotes: string) => {
      updateSampleAlert(id, {
        state: AlertState.Closed,
        closed: { user: CURRENT_USER, date: new Date(), notes: closeNotes }
      })

      setNotification("Alert updated to 'Closed'")
      setShowCloseDialog(false)
    },
    [id, updateSampleAlert]
  )

  const onFieldChange = useCallback(
    <T extends SIEMAlert | EDRAlert>(field: keyof T, value: T[keyof T]) => {
      updateSampleAlert(id, {
        [field]: value
      })

      setNotification('Saved change')
    },
    [id, updateSampleAlert]
  )

  if (!alert) {
    return <>No alert found with id</>
  }

  return (
    <Page>
      <Stack direction="column" spacing={4}>
        <AlertDetailHeader />

        <AlertDetailBreadcrumbs alertState={alert.state} />

        <AlertDetailForm
          alert={alert}
          onTriage={onTriage}
          onInvestigate={onInvestigate}
          onCloseStart={onCloseStart}
          onReview={onReview}
          onEscalate={onEscalate}
          onChangeSeverity={onChangeSeverity}
        />
      </Stack>

      <Snackbar
        open={notification !== null}
        autoHideDuration={8000}
        onClose={handleCloseNotification}
        message={notification}
        color="success"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        slotProps={{
          content: {
            sx: {
              border: '1px solid black',
              borderRadius: '40px',
              color: 'black',
              bgcolor: '#7BA05B',
              fontWeight: 'bold'
            }
          }
        }}
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseNotification}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />

      <AlertDetailTabs alert={alert} onFieldChange={onFieldChange} />

      <AlertDetailCloseConfirmationDialog
        open={showCloseDialog}
        onClose={onClose}
        onCancel={onCloseCancel}
      />
    </Page>
  )
}

export default AlertDetail
