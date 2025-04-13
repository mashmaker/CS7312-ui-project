import { createContext } from "react";
import { Alert } from "./alert.type";

const SampleAlertContext = createContext<{
  alerts: Alert[],
  updateSampleAlert: (id: Alert["id"], changes: Partial<Alert>) => void,
}>({
  alerts: [],
  updateSampleAlert: () => null,
});

export default SampleAlertContext;
