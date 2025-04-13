export enum AlertSeverity {
  Critical,
  High,
  Medium,
  Low,
}

export const ALERT_SEVERITY_LABELS: Record<AlertSeverity, string> = {
  [AlertSeverity.Critical]: "Critical",
  [AlertSeverity.High]: "High",
  [AlertSeverity.Medium]: "Medium",
  [AlertSeverity.Low]: "Low",
};

export const ALERT_SEVERITY_LABEL_TO_VALUE: Record<string, AlertSeverity> = {
  critical: AlertSeverity.Critical,
  high: AlertSeverity.High,
  medium: AlertSeverity.Medium,
  low: AlertSeverity.Low,
};

export enum AlertState {
  New,
  Triage,
  Investigating,
  Review,
  Escalated,
  Closed,
}

export const ALERT_STATE_LABELS: Record<AlertState, string> = {
  [AlertState.New]: "New",
  [AlertState.Triage]: "Triage",
  [AlertState.Investigating]: "Investigating",
  [AlertState.Review]: "Review",
  [AlertState.Escalated]: "Escalated",
  [AlertState.Closed]: "Closed",
}

export const ALERT_STATE_LABEL_TO_VALUE: Record<string, AlertState> = {
  new: AlertState.New,
  triage: AlertState.Triage,
  investigating: AlertState.Investigating,
  review: AlertState.Review,
  escalated: AlertState.Escalated,
  closed: AlertState.Closed,
};

export enum AlertCategory {
  SIEM,
  EDR,
}

export const ALERT_CATEGORY_LABELS: Record<AlertCategory, string> = {
  [AlertCategory.SIEM]: "SIEM",
  [AlertCategory.EDR]: "EDR",
};

type BaseAlert = {
  id: number,
  title: string,
  category: AlertCategory,
  severity: AlertSeverity,
  state: AlertState,
  createdOn: Date,
  assignedTo?: string,
  triaged?: { user: string, date: Date },
  investigated?: { user: string, date: Date },
  reviewed?: { user: string, date: Date },
  escalated?: { user: string, date: Date },
  closed?: { user: string, date: Date, notes: string },
  notes?: string;
}

export type SIEMAlert = BaseAlert & {
  category: AlertCategory.SIEM,
  sourceHost: string;
  destinationHost: string;
  sourceIP: string;
  destinationIP: string;
  sourceUser: string;
  destinationUser: string;
}

export type EDRAlert = BaseAlert & {
  category: AlertCategory.EDR,
  isQuarantined: boolean;
  process: string;
  parentProcess: string;
  host: string;
}

export type Alert = SIEMAlert | EDRAlert;

export const isSIEMAlert = (alert: Alert): alert is SIEMAlert => {
  return alert.category === AlertCategory.SIEM;
}

export const isEDRAlert = (alert: Alert): alert is EDRAlert => {
  return alert.category === AlertCategory.EDR;
}
