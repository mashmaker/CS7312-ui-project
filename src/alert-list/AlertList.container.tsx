import { Box, Stack, Typography } from "@mui/material";
import Page from "../layout/Page";
import AlertListDataGrid from "./AlertListDataGrid.component";

const AlertList = () => {
  return (
    <Page>
      <Stack direction="column" spacing={4}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4">Alerts List</Typography>
        </Box>

        <AlertListDataGrid />
      </Stack>
    </Page>
  )
}

export default AlertList;
