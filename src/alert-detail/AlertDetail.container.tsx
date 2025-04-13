import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Page from "../layout/Page";
import AlertDetailHeader from "./AlertDetailHeader.component";
import { getSampleAlertById } from "../alert/sample-alerts";
import AlertDetailBreadcrumbs from "./AlertDetailBreadcrumbs.component";
import AlertDetailForm from "./AlertDetailForm/AlertDetailForm.component";
import { Alert, AlertSeverity, AlertState } from "../alert/alert.type";
import AlertDetailTabs from "./AlertDetailForm/AlertDetailTabs.component";
import AlertDetailCloseConfirmationDialog from "./AlertDetailForm/AlertDetailCloseConfirmationDialog";

const TEST_USER = "Test User";

const AlertDetail = () => {
  const { id } = useParams();
  const [alert, setAlert] = useState<Alert>(getSampleAlertById(Number(id)));

  const [notification, setNotification] = useState<string | null>(null);
  const handleCloseNotification = () => setNotification(null);

  const [showCloseDialog, setShowCloseDialog] = useState<boolean>(false);

  const onTriageAlert = useCallback(() => {
    setAlert((currAlert) => ({
      ...currAlert,
      state: AlertState.Triage,
      triagedBy: TEST_USER,
    }));

    setNotification("You are triaging the alert");
  }, []);

  const onInvestigate = useCallback(() => {
    setAlert((currAlert) => ({
      ...currAlert,
      state: AlertState.Investigating,
      assignedTo: TEST_USER,
    }));

    setNotification("You are investigating the alert");
  }, []);

  const onCloseStart = () => setShowCloseDialog(true)
  const onCloseCancel = () => setShowCloseDialog(false)
  const onClose = useCallback((closeNotes: string) => {
    setAlert((currAlert) => ({
      ...currAlert,
      state: AlertState.Closed,
      closeNotes,
      closedBy: TEST_USER,
    }));

    setNotification("You have closed the alert");
    setShowCloseDialog(false);
  }, []);

  const onReview = useCallback(() => {
    setAlert((currAlert) => ({
      ...currAlert,
      state: AlertState.Review,
    }));

    setNotification("You have requested a review");
  }, []);

  const onChangeSeverity = useCallback((newSeverity: AlertSeverity) => {
    setAlert((currAlert) => ({
      ...currAlert,
      severity: newSeverity
    }));

    setNotification("You have changed the severity");
  }, []);

  const onEscalate = useCallback(() => {
    setAlert((currAlert) => ({
      ...currAlert,
      state: AlertState.Escalated,
      reviewedBy: TEST_USER,
    }));

    setNotification("You have escalated the alert");
  }, []);

  useEffect(() => {
    // automatically transition to triage when viewing new alert
    if (alert.state === AlertState.New) {
      onTriageAlert();
    }
  }, [alert.state, onTriageAlert]);

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

      <AlertDetailTabs alert={alert} />

      <AlertDetailCloseConfirmationDialog
        open={showCloseDialog}
        onClose={onClose}
        onCancel={onCloseCancel}
      />
    </Page>
  )
}

export default AlertDetail;
