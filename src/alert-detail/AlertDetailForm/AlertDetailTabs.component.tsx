import { useState } from "react";
import { Box, Button, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const AlertDetailTabs = () => {
  const [tab, setTab] = useState<number>(0);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const handleChangeTab = (_evt: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab label="Details" value={0} />
          <Tab label="Related Alerts" value={1} />
        </Tabs>
      </Box>

      {tab === 0 && (
        <Box marginTop={4}>
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

      {tab === 1 && (
        <Box>
          Related Alerts
        </Box>
      )}
    </>
  )
}

export default AlertDetailTabs;
