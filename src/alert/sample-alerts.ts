import { DateTime } from 'luxon'
import {
  type Alert,
  AlertCategory,
  AlertSeverity,
  AlertState
} from './alert.type'

const NOW = DateTime.now()

const SAMPLE_ALERTS: Array<Alert> = [
  {
    id: 1001,
    title: 'Brute Force Authentication Attempt',
    severity: AlertSeverity.High,
    state: AlertState.Investigating,
    createdOn: NOW.minus({ minutes: 2 }).toJSDate(),
    assignedTo: 'melissa.chen@example.com',
    triaged: {
      user: 'john.smith@example.com',
      date: NOW.minus({ minutes: 2 }).toJSDate()
    },
    category: AlertCategory.SIEM,
    sourceHost: 'unknown',
    destinationHost: 'auth-server-prod',
    sourceIP: '185.143.223.45',
    destinationIP: '10.12.44.76',
    sourceUser: 'anonymous',
    destinationUser: 'admin'
  },
  {
    id: 1002,
    title: 'Suspicious PowerShell Command Execution',
    severity: AlertSeverity.Critical,
    state: AlertState.New,
    createdOn: NOW.minus({ minutes: 7, seconds: 4 }).toJSDate(),
    category: AlertCategory.SIEM,
    sourceHost: 'workstation-45',
    destinationHost: 'dc01.internal.corp',
    sourceIP: '192.168.12.45',
    destinationIP: '192.168.1.10',
    sourceUser: 'david.wilson',
    destinationUser: 'system'
  },
  {
    id: 1003,
    title: 'Multiple Failed Login from Foreign IP',
    severity: AlertSeverity.Medium,
    state: AlertState.Triage,
    createdOn: NOW.minus({ days: 1 }).toJSDate(),
    category: AlertCategory.SIEM,
    sourceHost: 'unknown',
    destinationHost: 'vpn-gateway',
    sourceIP: '118.93.154.22',
    destinationIP: '203.0.113.4',
    sourceUser: 'unknown',
    destinationUser: 'janet.brown'
  },
  {
    id: 1004,
    title: 'Suspicious PowerShell Command Execution',
    severity: AlertSeverity.Critical,
    state: AlertState.Escalated,
    createdOn: NOW.minus({ days: 3 }).toJSDate(),
    assignedTo: 'security.lead@example.com',
    triaged: {
      user: 'melissa.chen@example.com',
      date: NOW.minus({ days: 3 }).toJSDate()
    },
    reviewed: {
      user: 'security.lead@example.com',
      date: NOW.minus({ days: 3 }).toJSDate()
    },
    category: AlertCategory.SIEM,
    sourceHost: 'workstation-123',
    destinationHost: 'unknown-cloud-storage.com',
    sourceIP: '192.168.45.123',
    destinationIP: '45.77.65.211',
    sourceUser: 'mike.roberts',
    destinationUser: 'unknown'
  },
  {
    id: 1005,
    title: 'Unusual Authentication Time',
    severity: AlertSeverity.Low,
    state: AlertState.Closed,
    createdOn: NOW.minus({ days: 5 }).toJSDate(),
    assignedTo: 'alice.johnson@example.com',
    triaged: {
      user: 'alice.johnson@example.com',
      date: NOW.minus({ days: 5 }).toJSDate()
    },
    reviewed: {
      user: 'bob.thompson@example.com',
      date: NOW.minus({ days: 5 }).toJSDate()
    },
    closed: {
      date: NOW.minus({ days: 5 }).toJSDate(),
      user: 'bob.thompson@example.com',
      notes: 'Verified with user - business trip to different timezone'
    },
    category: AlertCategory.SIEM,
    sourceHost: 'vpn-client',
    destinationHost: 'vpn-gateway',
    sourceIP: '82.165.97.23',
    destinationIP: '203.0.113.4',
    sourceUser: 'sandra.miller',
    destinationUser: 'sandra.miller'
  },
  {
    id: 1006,
    title: 'DNS Request to Known Malicious Domain',
    severity: AlertSeverity.High,
    state: AlertState.Review,
    createdOn: NOW.minus({ hours: 1 }).toJSDate(),
    assignedTo: 'john.smith@example.com',
    triaged: {
      user: 'john.smith@example.com',
      date: NOW.minus({ hours: 1 }).toJSDate()
    },
    category: AlertCategory.SIEM,
    sourceHost: 'workstation-87',
    destinationHost: 'malicious-domain.example',
    sourceIP: '192.168.24.87',
    destinationIP: '5.61.32.17',
    sourceUser: 'intern.user',
    destinationUser: 'n/a'
  },
  {
    id: 1007,
    title: 'SSH Connection from Unauthorized IP',
    severity: AlertSeverity.Medium,
    state: AlertState.Investigating,
    createdOn: NOW.minus({ minutes: 2 }).toJSDate(),
    assignedTo: 'melissa.chen@example.com',
    triaged: {
      user: 'alice.johnson@example.com',
      date: NOW.minus({ minutes: 2 }).toJSDate()
    },
    category: AlertCategory.SIEM,
    sourceHost: 'unknown',
    destinationHost: 'web-server-02',
    sourceIP: '176.53.124.89',
    destinationIP: '10.16.32.12',
    sourceUser: 'root',
    destinationUser: 'root'
  },
  {
    id: 1008,
    title: 'Unusual Volume of Data Transfer',
    severity: AlertSeverity.Medium,
    state: AlertState.New,
    createdOn: NOW.minus({ months: 1 }).toJSDate(),
    category: AlertCategory.SIEM,
    sourceHost: 'file-server',
    destinationHost: 'workstation-56',
    sourceIP: '10.12.13.50',
    destinationIP: '192.168.13.56',
    sourceUser: 'system',
    destinationUser: 'peter.jackson'
  },
  {
    id: 1009,
    title: 'Firewall Rule Modification',
    severity: AlertSeverity.Critical,
    state: AlertState.Triage,
    createdOn: NOW.minus({ hours: 2 }).toJSDate(),
    category: AlertCategory.SIEM,
    sourceHost: 'admin-workstation',
    destinationHost: 'firewall-01',
    sourceIP: '192.168.10.5',
    destinationIP: '10.0.0.1',
    sourceUser: 'admin.user',
    destinationUser: 'system'
  },
  {
    id: 1010,
    title: 'Remote Access Tool Detected',
    severity: AlertSeverity.High,
    state: AlertState.Review,
    createdOn: NOW.minus({ hours: 17 }).toJSDate(),
    assignedTo: 'bob.thompson@example.com',
    triaged: {
      user: 'bob.thompson@example.com',
      date: NOW.minus({ hours: 17 }).toJSDate()
    },
    category: AlertCategory.SIEM,
    sourceHost: 'external-host',
    destinationHost: 'workstation-77',
    sourceIP: '43.156.12.67',
    destinationIP: '192.168.15.77',
    sourceUser: 'unknown',
    destinationUser: 'marketing.user'
  },
  {
    id: 1011,
    title: 'Unusual Admin Console Access',
    severity: AlertSeverity.Medium,
    state: AlertState.Closed,
    createdOn: NOW.minus({ years: 2 }).toJSDate(),
    assignedTo: 'alice.johnson@example.com',
    triaged: {
      user: 'alice.johnson@example.com',
      date: NOW.minus({ years: 2 }).toJSDate()
    },
    reviewed: {
      user: 'alice.johnson@example.com',
      date: NOW.minus({ years: 2 }).toJSDate()
    },
    closed: {
      date: NOW.minus({ years: 2 }).toJSDate(),
      user: 'melissa.chen@example.com',
      notes: 'Planned maintenance by IT team'
    },
    category: AlertCategory.SIEM,
    sourceHost: 'jumpbox-01',
    destinationHost: 'admin-console',
    sourceIP: '10.10.10.15',
    destinationIP: '10.10.10.200',
    sourceUser: 'it.admin',
    destinationUser: 'system'
  },
  {
    id: 1012,
    title: 'TOR Exit Node Connection',
    severity: AlertSeverity.High,
    state: AlertState.Escalated,
    createdOn: NOW.minus({ days: 17 }).toJSDate(),
    assignedTo: 'security.lead@example.com',
    triaged: {
      user: 'john.smith@example.com',
      date: NOW.minus({ days: 18 }).toJSDate()
    },
    reviewed: {
      user: 'melissa.chen@example.com',
      date: NOW.minus({ days: 17 }).toJSDate()
    },
    escalated: {
      user: 'melissa.chen@example.com',
      date: NOW.minus({ days: 16 }).toJSDate()
    },
    category: AlertCategory.SIEM,
    sourceHost: 'unknown',
    destinationHost: 'web-portal',
    sourceIP: '176.10.99.200',
    destinationIP: '203.0.113.25',
    sourceUser: 'anonymous',
    destinationUser: 'n/a'
  },
  {
    id: 1013,
    title: 'Database Connection from Development Server',
    severity: AlertSeverity.Low,
    state: AlertState.Closed,
    createdOn: NOW.minus({ years: 1 }).toJSDate(),
    assignedTo: 'bob.thompson@example.com',
    triaged: {
      user: 'bob.thompson@example.com',
      date: NOW.minus({ years: 1 }).toJSDate()
    },
    reviewed: {
      user: 'bob.thompson@example.com',
      date: NOW.minus({ years: 1 }).toJSDate()
    },
    closed: {
      date: NOW.minus({ years: 1 }).toJSDate(),
      user: 'bob.thompson@example.com',
      notes: 'Authorized database migration test'
    },
    category: AlertCategory.SIEM,
    sourceHost: 'dev-server-05',
    destinationHost: 'prod-db-cluster',
    sourceIP: '10.20.30.5',
    destinationIP: '10.100.10.20',
    sourceUser: 'db.migration',
    destinationUser: 'db.reader'
  },
  {
    id: 1014,
    title: 'DDoS Attack Detected',
    severity: AlertSeverity.Critical,
    state: AlertState.Investigating,
    createdOn: NOW.minus({ minutes: 4 }).toJSDate(),
    assignedTo: 'security.lead@example.com',
    triaged: {
      user: 'john.smith@example.com',
      date: NOW.minus({ minutes: 4 }).toJSDate()
    },
    category: AlertCategory.SIEM,
    sourceHost: 'multiple',
    destinationHost: 'web-servers',
    sourceIP: 'multiple',
    destinationIP: '203.0.113.0/24',
    sourceUser: 'n/a',
    destinationUser: 'n/a'
  },
  {
    id: 1015,
    title: 'Suspicious Email Attachment Opened',
    severity: AlertSeverity.High,
    state: AlertState.Triage,
    createdOn: NOW.minus({ days: 3 }).toJSDate(),
    category: AlertCategory.SIEM,
    sourceHost: 'mail-gateway',
    destinationHost: 'workstation-42',
    sourceIP: '198.51.100.76',
    destinationIP: '192.168.14.42',
    sourceUser: 'external@suspicious-domain.com',
    destinationUser: 'finance.director'
  },
  {
    id: 2001,
    title: 'Suspicious Process Created by Microsoft Office',
    severity: AlertSeverity.Critical,
    state: AlertState.New,
    createdOn: NOW.minus({ seconds: 16 }).toJSDate(),
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'cmd.exe',
    parentProcess: 'winword.exe',
    host: 'workstation-fin-12'
  },
  {
    id: 2002,
    title: 'Unsigned DLL Loaded',
    severity: AlertSeverity.Medium,
    state: AlertState.Triage,
    createdOn: NOW.minus({ days: 1 }).toJSDate(),
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'explorer.exe',
    parentProcess: 'n/a',
    host: 'workstation-hr-05'
  },
  {
    id: 2003,
    title: 'Memory Scraping Detection',
    severity: AlertSeverity.High,
    state: AlertState.Investigating,
    createdOn: NOW.minus({ days: 4 }).toJSDate(),
    assignedTo: 'john.smith@example.com',
    triaged: {
      user: 'john.smith@example.com',
      date: NOW.minus({ days: 4 }).toJSDate()
    },
    category: AlertCategory.EDR,
    isQuarantined: true,
    process: 'unknown-process.exe',
    parentProcess: 'services.exe',
    host: 'pos-terminal-15'
  },
  {
    id: 2004,
    title: 'Potential Ransomware File Activity',
    severity: AlertSeverity.Critical,
    state: AlertState.Escalated,
    createdOn: NOW.minus({ hours: 2 }).toJSDate(),
    assignedTo: 'security.lead@example.com',
    triaged: {
      user: 'melissa.chen@example.com',
      date: NOW.minus({ hours: 2 }).toJSDate()
    },
    reviewed: {
      user: 'security.lead@example.com',
      date: NOW.minus({ hours: 2 }).toJSDate()
    },
    category: AlertCategory.EDR,
    isQuarantined: true,
    process: 'unknown.exe',
    parentProcess: 'outlook.exe',
    host: 'workstation-legal-02'
  },
  {
    id: 2005,
    title: 'PowerShell Script with Obfuscated Content',
    severity: AlertSeverity.High,
    state: AlertState.Review,
    createdOn: NOW.minus({ days: 2 }).toJSDate(),
    assignedTo: 'bob.thompson@example.com',
    triaged: {
      user: 'bob.thompson@example.com',
      date: NOW.minus({ days: 2 }).toJSDate()
    },
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'powershell.exe',
    parentProcess: 'cmd.exe',
    host: 'server-util-03'
  },
  {
    id: 2006,
    title: 'Credential Dumping Attempt',
    severity: AlertSeverity.Critical,
    state: AlertState.Investigating,
    createdOn: NOW.minus({ hours: 4 }).toJSDate(),
    assignedTo: 'security.lead@example.com',
    triaged: {
      user: 'john.smith@example.com',
      date: NOW.minus({ hours: 4 }).toJSDate()
    },
    category: AlertCategory.EDR,
    isQuarantined: true,
    process: 'mimikatz.exe',
    parentProcess: 'cmd.exe',
    host: 'workstation-it-08'
  },
  {
    id: 2007,
    title: 'Process Injection Detected',
    severity: AlertSeverity.High,
    state: AlertState.New,
    createdOn: NOW.minus({ seconds: 21 }).toJSDate(),
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'svchost.exe',
    parentProcess: 'explorer.exe',
    host: 'workstation-dev-11'
  },
  {
    id: 2008,
    title: 'Binary Executed from Temporary Directory',
    severity: AlertSeverity.Medium,
    state: AlertState.Triage,
    createdOn: NOW.minus({ minutes: 17 }).toJSDate(),
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'update.exe',
    parentProcess: 'browser.exe',
    host: 'workstation-sales-09'
  },
  {
    id: 2009,
    title: 'System File Modification',
    severity: AlertSeverity.High,
    state: AlertState.Investigating,
    createdOn: NOW.minus({ days: 3 }).toJSDate(),
    assignedTo: 'alice.johnson@example.com',
    triaged: {
      user: 'alice.johnson@example.com',
      date: NOW.minus({ days: 3 }).toJSDate()
    },
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'regsvr32.exe',
    parentProcess: 'cmd.exe',
    host: 'workstation-eng-15'
  },
  {
    id: 2010,
    title: 'Antivirus Disabled',
    severity: AlertSeverity.Critical,
    state: AlertState.Escalated,
    createdOn: NOW.minus({ days: 1 }).toJSDate(),
    assignedTo: 'security.lead@example.com',
    triaged: {
      user: 'melissa.chen@example.com',
      date: NOW.minus({ days: 1 }).toJSDate()
    },
    reviewed: {
      user: 'bob.thompson@example.com',
      date: NOW.minus({ days: 1 }).toJSDate()
    },
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'taskkill.exe',
    parentProcess: 'cmd.exe',
    host: 'workstation-exec-01'
  },
  {
    id: 2011,
    title: 'WMI Lateral Movement',
    severity: AlertSeverity.High,
    state: AlertState.Review,
    createdOn: NOW.minus({ days: 3 }).toJSDate(),
    assignedTo: 'melissa.chen@example.com',
    triaged: {
      user: 'melissa.chen@example.com',
      date: NOW.minus({ days: 3 }).toJSDate()
    },
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'wmic.exe',
    parentProcess: 'cmd.exe',
    host: 'server-app-02'
  },
  {
    id: 2012,
    title: 'Suspicious Registry Modification',
    severity: AlertSeverity.Medium,
    state: AlertState.Closed,
    createdOn: NOW.minus({ days: 5 }).toJSDate(),
    assignedTo: 'john.smith@example.com',
    triaged: {
      user: 'john.smith@example.com',
      date: NOW.minus({ days: 5 }).toJSDate()
    },
    reviewed: {
      user: 'john.smith@example.com',
      date: NOW.minus({ days: 5 }).toJSDate()
    },
    closed: {
      date: NOW.minus({ days: 5 }).toJSDate(),
      user: 'john.smith@example.com',
      notes: 'Software installation with legitimate registry changes'
    },
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'installer.exe',
    parentProcess: 'explorer.exe',
    host: 'workstation-reception'
  },
  {
    id: 2013,
    title: 'Suspicious Scheduled Task Creation',
    severity: AlertSeverity.High,
    state: AlertState.New,
    createdOn: NOW.minus({ minutes: 1 }).toJSDate(),
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'schtasks.exe',
    parentProcess: 'cmd.exe',
    host: 'workstation-prod-21'
  },
  {
    id: 2014,
    title: 'LSASS Memory Access',
    severity: AlertSeverity.Critical,
    state: AlertState.Triage,
    createdOn: NOW.minus({ minutes: 7 }).toJSDate(),
    category: AlertCategory.EDR,
    isQuarantined: true,
    process: 'unknown-tool.exe',
    parentProcess: 'powershell.exe',
    host: 'server-dc-02'
  },
  {
    id: 2015,
    title: 'Unusual Browser Extension Installation',
    severity: AlertSeverity.Low,
    state: AlertState.Escalated,
    createdOn: NOW.minus({ months: 9 }).toJSDate(),
    assignedTo: 'alice.johnson@example.com',
    triaged: {
      user: 'alice.johnson@example.com',
      date: NOW.minus({ months: 9 }).toJSDate()
    },
    reviewed: {
      user: 'melissa.chen@example.com',
      date: NOW.minus({ months: 9 }).toJSDate()
    },
    closed: {
      date: NOW.minus({ months: 9 }).toJSDate(),
      user: 'melissa.chen@example.com',
      notes: 'Approved productivity extension from corporate store'
    },
    category: AlertCategory.EDR,
    isQuarantined: false,
    process: 'chrome.exe',
    parentProcess: 'explorer.exe',
    host: 'workstation-marketing-07'
  }
]

export default SAMPLE_ALERTS
