import { useState } from "react";
import { Alert, EDRAlert, SIEMAlert } from "./alert.type";
import SampleAlertContext from "./sample-alert.context";
import SAMPLE_ALERTS from "./sample-alerts";

type SampleAlertProviderProps = {
  children: React.ReactElement,
};

export const SampleAlertProvider = ({ children }: SampleAlertProviderProps) => {
  const [alerts, setAlerts] = useState(SAMPLE_ALERTS);

  const updateSampleAlert = (id: Alert["id"], changes: Partial<Alert>) => {
    setAlerts((oldAlerts) => oldAlerts.map((alert) => alert.id !== id
      ? alert
      : { ...alert, ...changes } as SIEMAlert | EDRAlert))
  }

  return <SampleAlertContext.Provider value={{
    alerts,
    updateSampleAlert,
  }}>{children}</SampleAlertContext.Provider>
};
