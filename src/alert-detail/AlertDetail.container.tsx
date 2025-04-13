import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Page from "../layout/Page";
import AlertDetailHeader from "./AlertDetailHeader.component";
import AlertDetailBreadcrumbs from "./AlertDetailBreadcrumbs.component";
import AlertDetailForm from "./AlertDetailForm/AlertDetailForm.component";
import { AlertSeverity, AlertState, EDRAlert, SIEMAlert } from "../alert/alert.type";
import AlertDetailTabs from "./AlertDetailForm/AlertDetailTabs/AlertDetailTabs.component";
import AlertDetailCloseConfirmationDialog from "./AlertDetailForm/AlertDetailCloseConfirmationDialog";
import { useSampleAlerts } from "../alert/use-sample-alerts.hook";

const TEST_USER = "Test User";

const AlertDetail = () => {
  const { id: idStr } = useParams();
  const id = useMemo(() => Number(idStr), [idStr]);

  const { alerts, updateSampleAlert } = useSampleAlerts();
  const alert = alerts.find((alert) => alert.id === id);

  const [notification, setNotification] = useState<string | null>(null);
  const handleCloseNotification = () => setNotification(null);

  const [showCloseDialog, setShowCloseDialog] = useState<boolean>(false);

  const onTriageAlert = useCallback(() => {
    updateSampleAlert(id, {
      state: AlertState.Triage,
      triagedBy: TEST_USER,
    });

    setNotification("You are triaging the alert");
  }, [id, updateSampleAlert]);

  const onInvestigate = useCallback(() => {
    updateSampleAlert(id, {
      state: AlertState.Investigating,
      assignedTo: TEST_USER,
    });

    setNotification("You are investigating the alert");
  }, [id, updateSampleAlert]);

  const onCloseStart = () => setShowCloseDialog(true)
  const onCloseCancel = () => setShowCloseDialog(false)
  const onClose = useCallback((closeNotes: string) => {
    updateSampleAlert(id, {
      state: AlertState.Closed,
      closeNotes,
      closedBy: TEST_USER,
    });

    setNotification("You have closed the alert");
    setShowCloseDialog(false);
  }, [id, updateSampleAlert]);

  const onReview = useCallback(() => {
    updateSampleAlert(id, {
      state: AlertState.Review,
    });

    setNotification("You have requested a review");
  }, [id, updateSampleAlert]);

  const onChangeSeverity = useCallback((newSeverity: AlertSeverity) => {
    updateSampleAlert(id, {
      severity: newSeverity
    });

    setNotification("You have changed the severity");
  }, [id, updateSampleAlert]);

  const onEscalate = useCallback(() => {
    updateSampleAlert(id, {
      state: AlertState.Escalated,
      reviewedBy: TEST_USER,
    });

    setNotification("You have escalated the alert");
  }, [id, updateSampleAlert]);

  const onFieldChange = useCallback(<T extends SIEMAlert | EDRAlert>(field: keyof T, value: T[keyof T]) => {
    updateSampleAlert(id, {
      [field]: value,
    });

    setNotification("Saved change");
  }, [id, updateSampleAlert]);

  useEffect(() => {
    // automatically transition to triage when viewing new alert
    if (alert?.state === AlertState.New) {
      onTriageAlert();
    }
  }, [alert?.state, onTriageAlert]);

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
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        slotProps={{
          content: {
            sx:{
              border: "1px solid black",
              borderRadius: "40px",
              color: "black",
              bgcolor: "#7BA05B",
              fontWeight: "bold",
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

export default AlertDetail;
