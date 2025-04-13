export enum AlertSeverity {
  Critical = "Critical",
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export enum AlertState {
  New = "New",
  Triage = "Triage",
  Investigating = "Investigating",
  Review = "Review",
  Escalated = "Escalated",
  Closed = "Closed",
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
