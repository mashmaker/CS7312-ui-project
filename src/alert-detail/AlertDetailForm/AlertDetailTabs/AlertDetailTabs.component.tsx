import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Alert, EDRAlert, SIEMAlert } from "../../../alert/alert.type";
import AlertDetailRelatedAlertsTab from "./AlertDetailRelatedAlertsTab.component";
import AlertDetailsTab from "./AlertDetailsTab.component";

const TABS = {
  DETAILS: "Details",
  RELATED_ALERTS: "Related Alerts",
} as const;

type Tab = typeof TABS[keyof typeof TABS];

export type AlertDetailTabsProps = {
  alert: Alert,
  onFieldChange: <T extends SIEMAlert | EDRAlert>(field: keyof T, value: T[keyof T]) => void;
};

const AlertDetailTabs = ({ alert, onFieldChange }: AlertDetailTabsProps) => {
  const [tab, setTab] = useState<Tab>(TABS.DETAILS);

  const handleChangeTab = (_evt: React.SyntheticEvent, newTab: Tab) => {
    setTab(newTab);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginY: 4 }}>
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab label="Details" value={TABS.DETAILS} />
          <Tab label="Related Alerts" value={TABS.RELATED_ALERTS} />
        </Tabs>
      </Box>

      {tab === TABS.DETAILS && (
        <AlertDetailsTab alert={alert} onFieldChange={onFieldChange} />
      )}

      {tab === TABS.RELATED_ALERTS && (
        <AlertDetailRelatedAlertsTab alert={alert} />
      )}
    </>
  )
}

export default AlertDetailTabs;
