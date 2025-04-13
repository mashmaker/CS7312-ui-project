export enum AlertSeverity {
  Critical,
  High,
  Medium,
  Low,
}

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

export type Alert = {
  id: number,
  title: string,
  severity: AlertSeverity,
  state: AlertState,
  age: string,
  createdDate: string,
  assignedTo?: string,
  closedBy?: string,
  triagedBy?: string,
  reviewedBy?: string,
}
