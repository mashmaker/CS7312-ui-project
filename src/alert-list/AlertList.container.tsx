import { useState } from "react";

import { Stack } from "@mui/material";
import Page from "../layout/Page";

import AlertListHeader from "./AlertListHeader.component";
import AlertListDataGrid from "./AlertListDataGrid/AlertListDataGrid.component";

const AlertList = () => {
  const [showClosed, setShowClosed] = useState<boolean>(false);

  return (
    <Page>
      <Stack direction="column" spacing={2}>
        <AlertListHeader
          showClosed={showClosed}
          onToggleShowClosed={setShowClosed}
        />

        <AlertListDataGrid showClosed={showClosed} />
      </Stack>
    </Page>
  )
}

export default AlertList;
