import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Alert } from "../alert/alert.type";
import Severity from "../shared/Severity.component";

export type AlertDetailFormProps = {
  alert: Alert
}

const AlertDetailForm = ({ alert }: AlertDetailFormProps) => (
  <>
    <Box display="flex" justifyContent="space-between">
      <Box width="90%">
        <Typography variant="h5" fontWeight="bold">{alert.title}</Typography>
        <Typography variant="subtitle1" sx={{ paddingLeft: 2 }}>Created: {alert.createdDate}</Typography>
      </Box>

      <Box width="10%">
        <Severity severity={alert.severity} />
      </Box>
    </Box>

    <Grid container spacing={2}>
      <Grid size={4}>
        <Button>Quick Action</Button>
      </Grid>

      <Grid size={4}>
        <TextField placeholder="Assigned To" disabled fullWidth />
      </Grid>

      <Grid size={4}>
        <TextField placeholder="Triaged By" disabled fullWidth />
      </Grid>

      <Grid size={4}>
        <Typography>{alert.state}</Typography>
      </Grid>

      <Grid size={4} />

      <Grid size={4}>
        <TextField placeholder="Reviewer" disabled fullWidth />
      </Grid>
    </Grid>
  </>
)

export default AlertDetailForm;
