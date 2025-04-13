import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Page from "../layout/Page";
import AlertDetailHeader from "./AlertDetailHeader.component";
import { getSampleAlertById } from "../alert/sample-data";
import AlertDetailBreadcrumbs from "./AlertDetailBreadcrumbs.component";
import AlertDetailForm from "./AlertDetailForm/AlertDetailForm.component";
import { Alert, AlertState } from "../alert/alert.type";

const TEST_USER = "Test User";

const AlertDetail = () => {
  const { id } = useParams();
  const [alert, setAlert] = useState<Alert>(getSampleAlertById(Number(id)));

  const [notification, setNotification] = useState<string | null>(null);
  const handleCloseNotification = () => setNotification(null);

  const onTriageAlert = useCallback(() => {
    setAlert((currAlert) => ({
      ...currAlert,
      state: AlertState.Triage,
      triagedBy: TEST_USER,
    }));

    setNotification("You are triaging the alert");
  }, []);

  const onInvestigateAlert = useCallback(() => {
    setAlert((currAlert) => ({
      ...currAlert,
      state: AlertState.Investigating,
      assignedTo: TEST_USER,
    }));

    setNotification("You are investigating the alert");
  }, []);

  const onCloseAlert = useCallback(() => {
    setAlert((currAlert) => ({
      ...currAlert,
      state: AlertState.Closed,
      closedBy: TEST_USER,
    }));

    setNotification("You have closed the alert");
  }, []);

  const onReviewAlert = useCallback(() => {
    setAlert((currAlert) => ({
      ...currAlert,
      state: AlertState.Review,
    }));

    setNotification("You have requested a review");
  }, []);

  const onEscalateAlert = useCallback(() => {
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
          onInvestigateAlert={onInvestigateAlert}
          onCloseAlert={onCloseAlert}
          onReviewAlert={onReviewAlert}
          onEscalateAlert={onEscalateAlert}
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
    </Page>
  )
}

export default AlertDetail;
