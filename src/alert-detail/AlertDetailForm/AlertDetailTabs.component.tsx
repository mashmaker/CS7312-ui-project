import { useEffect, useState } from "react";
import { Box, Button, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AlertListDataGrid from "../../alert-list/AlertListDataGrid/AlertListDataGrid.component";
import { Alert, AlertState } from "../../alert/alert.type";

export type AlertDetailTabsProps = {
  alert: Alert
};

const TABS = {
  DETAILS: "Details",
  RELATED_ALERTS: "Related Alerts",
  CLOSE_NOTES: "Close Notes"
} as const;
type Tab = typeof TABS[keyof typeof TABS];

const AlertDetailTabs = ({ alert }: AlertDetailTabsProps) => {
  const [tab, setTab] = useState<Tab>(TABS.DETAILS);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const handleChangeTab = (_evt: React.SyntheticEvent, newTab: Tab) => {
    setTab(newTab);
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  }

  useEffect(() => {
    if (alert.state === AlertState.Closed) {
      setTab(TABS.CLOSE_NOTES);
    }
  }, [alert.state]);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginY: 4 }}>
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab label="Details" value={TABS.DETAILS} />
          <Tab label="Related Alerts" value={TABS.RELATED_ALERTS} />
          <Tab label="Close Notes" value={TABS.CLOSE_NOTES} />
        </Tabs>
      </Box>

      {tab === TABS.DETAILS && (
        <Box>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid size={12} textAlign="right">
              <Button variant="outlined" size="large" onClick={handleEditClick}>
                <EditIcon sx={{ marginRight: 2 }} />
                <Typography>Edit</Typography>
              </Button>
            </Grid>

            <Grid size={6}>
              <TextField
                label="Source Host"
                value="example.com"
                disabled={isEditable}
                fullWidth
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Destination Host"
                value="dest.example.com"
                disabled={isEditable}
                fullWidth
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Source IP"
                value="127.0.0.1"
                disabled={isEditable}
                fullWidth
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Destination IP"
                value="192.168.1.1"
                disabled={isEditable}
                fullWidth
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Source User"
                value="target_user"
                disabled={isEditable}
                fullWidth
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Destination User"
                value="malicious_user"
                disabled={isEditable}
                fullWidth
              />
            </Grid>

            <Grid size={12}>
              <TextField
                label="Work Notes"
                multiline
                minRows={2}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      )}

      {tab === TABS.RELATED_ALERTS && (
        <Box marginTop={2}>
          <AlertListDataGrid
            showClosed
            excludeId={alert.id}
            defaultQuery={`title=${alert.title}`}
          />
        </Box>
      )}

      {tab === TABS.CLOSE_NOTES && (
        <Box marginTop={2}>
          <TextField
            multiline
            minRows={3}
            value={alert.closeNotes || ""}
            label="Close Notes"
            fullWidth
            disabled
          />
        </Box>
      )}
    </>
  )
}

export default AlertDetailTabs;
