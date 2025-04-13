import { useEffect, useState } from "react";

import { Stack } from "@mui/material";
import Page from "../layout/Page";

import AlertListHeader from "./AlertListHeader.component";
import AlertListDataGrid from "./AlertListDataGrid.component";
import SAMPLE_ALERTS from "../alert/sample-data";
import { Alert, AlertState } from "../alert/alert.type";
import AlertListSearch from "./AlertListSearch.component";

const AlertList = () => {
  const [query, setQuery] = useState<string>("");
  const [alerts, setAlerts] = useState<Alert[]>(SAMPLE_ALERTS);
  const [showClosed, setShowClosed] = useState<boolean>(false);

  useEffect(() => {
    let visibleAlerts = SAMPLE_ALERTS;

    // filter out closed alerts
    if (!showClosed) {
      visibleAlerts = visibleAlerts.filter((alert) => alert.state !== AlertState.Closed);
    }

    // filter alerts by command language
    if (query) {
      const queryParts = query.split(",");
      queryParts.forEach((queryTerm) => {
        const [key, value] = queryTerm.split("=");
        visibleAlerts = visibleAlerts.filter((alert) => alert[key as keyof Alert] === value);
      });

      setAlerts(visibleAlerts)
    }

    setAlerts(visibleAlerts)
  }, [showClosed, query]);

  const numNewAlerts = SAMPLE_ALERTS.filter((alert) => alert.state === AlertState.New).length;

  return (
    <Page>
      <Stack direction="column" spacing={2}>
        <AlertListHeader
          showClosed={showClosed}
          onToggleShowClosed={setShowClosed}
          numNewAlerts={numNewAlerts}
        />

        <AlertListSearch onSearch={setQuery} />

        <AlertListDataGrid alerts={alerts} />
      </Stack>
    </Page>
  )
}

export default AlertList;
