import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { type Alert, AlertState, AlertSeverity } from "../alert/alert.type";
import CriticalSeverity from '../shared/severity/CriticalSeverity';
import HighSeverity from '../shared/severity/HighSeverity';
import MediumSeverity from '../shared/severity/MediumSeverity';
import LowSeverity from '../shared/severity/LowSeverity';
import SAMPLE_ALERTS from '../alert/sample-data';

const columns: GridColDef<Alert>[] = [
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
      if (row.severity === AlertSeverity.Critical) {
        return <CriticalSeverity />
      }

      if (row.severity === AlertSeverity.High) {
        return <HighSeverity />
      }

      if (row.severity === AlertSeverity.Medium) {
        return <MediumSeverity />
      }

      if (row.severity === AlertSeverity.Low) {
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
      const linkText = row.state === AlertState.New
        ? "Triage"
        : row.state === AlertState.Review
          ? "Review"
          : "View";

      return <Button fullWidth component={NavLink} to={`/${row.id}`} variant="outlined">{linkText}</Button>
    }
  },
];

export type AlertListDataGridProps = {
  alerts: Alert[];
}

const AlertListDataGrid = ({ alerts }: AlertListDataGridProps) => ((
  <DataGrid
    rows={alerts}
    columns={columns}
    getRowClassName={({ row }) => row.state}
    sx={{ [`.${AlertState.Closed}`]: { bgcolor: "grey", "&:hover": { bgcolor: "darkgrey" } } }}
    initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
    pageSizeOptions={[5, 10, 15, 20]}
  />
))

export default AlertListDataGrid;
