import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CriticalSeverity from '../shared/severity/CriticalSeverity';
import HighSeverity from '../shared/severity/HighSeverity';
import MediumSeverity from '../shared/severity/MediumSeverity';
import LowSeverity from '../shared/severity/LowSeverity';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

enum Severity {
  Critical = "Critical",
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

enum State {
  New = "New",
  Triage = "Triage",
  Investigating = "Investigating",
  Review = "Review",
  Escalated = "Escalated",
  Closed = "Closed",
}

const rows = [
  {
    id: 1,
    title: 'Potential Ransomware',
    severity: Severity.Critical,
    state: State.New,
    age: "5 minutes",
  },
  {
    id: 2,
    title: 'Potential Breach',
    severity: Severity.High,
    state: State.Triage,
    age: "10 minutes",
  },
  {
    id: 3,
    title: 'Failed Login',
    severity: Severity.Medium,
    state: State.Review,
    age: "1 hour",
  },
  {
    id: 4,
    title: 'Potential Phishing',
    severity: Severity.Low,
    state: State.Escalated,
    age: "4 days",
  },
  {
    id: 5,
    title: 'Potential Phishing',
    severity: Severity.Medium,
    state: State.Closed,
    age: "1 year",
  },
];

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'age',
    headerName: 'Age',
    width: 150,
  },
  {
    field: 'severity',
    headerName: 'Severity',
    width: 150,
    renderCell: ({ row }) => {
      if (row.severity === Severity.Critical) {
        return <CriticalSeverity />
      }

      if (row.severity === Severity.High) {
        return <HighSeverity />
      }

      if (row.severity === Severity.Medium) {
        return <MediumSeverity />
      }

      if (row.severity === Severity.Low) {
        return <LowSeverity />
      }

      return <></>
    },
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 450,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 150,
    headerAlign: "center",
    align: "center"
  },
  {
    field: 'actions',
    headerName: '',
    width: 100,
    renderCell: ({ row }) => {
      const linkText = row.state === State.New
        ? "Triage"
        : row.state === State.Review
          ? "Review"
          : "View";

      return <Button fullWidth component={NavLink} to={`/${row.id}`} variant="outlined">{linkText}</Button>
    }
  },
];

export default function DataGridDemo() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 20,
          },
        },
      }}
      pageSizeOptions={[5, 10, 15, 20]}
    />
  );
}