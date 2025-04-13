import { AlertSeverity } from '../alert/alert.type'
import CriticalSeverity from './severity/CriticalSeverity'
import HighSeverity from './severity/HighSeverity'
import LowSeverity from './severity/LowSeverity'
import MediumSeverity from './severity/MediumSeverity'

export type SeverityProps = {
  severity: AlertSeverity
}

const Severity = ({ severity }: SeverityProps) => {
  if (severity === AlertSeverity.Critical) {
    return <CriticalSeverity />
  }

  if (severity === AlertSeverity.High) {
    return <HighSeverity />
  }

  if (severity === AlertSeverity.Medium) {
    return <MediumSeverity />
  }

  if (severity === AlertSeverity.Low) {
    return <LowSeverity />
  }

  return <></>
}

export default Severity
