import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import Page from "../layout/Page";
import AlertDetailHeader from "./AlertDetailHeader.component";
import SAMPLE_ALERTS from "../alert/sample-data";
import AlertDetailBreadcrumbs from "./AlertDetailBreadcrumbs.component";
import AlertDetailForm from "./AlertDetailForm.component";

const AlertDetail = () => {
  const { id } = useParams();
  const alert = SAMPLE_ALERTS.find((alert) => alert.id === Number(id));

  if (!alert) {
    return <Typography>No alert found with id: {id}</Typography>
  }

  return (
    <Page>
      <Stack direction="column" spacing={4}>
        <AlertDetailHeader />
        <AlertDetailBreadcrumbs alertState={alert.state} />
        <AlertDetailForm alert={alert} />
      </Stack>
    </Page>
  )
}

export default AlertDetail;
