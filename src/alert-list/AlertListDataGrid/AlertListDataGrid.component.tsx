import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { type Alert, ALERT_STATE_LABELS, AlertState } from "../../alert/alert.type";
import Severity from '../../shared/Severity.component';
import SAMPLE_ALERTS from '../../alert/sample-alerts';
import AlertListSearch from './AlertListSearch.component';

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
    headerAlign: "center",
    renderCell: ({ row }) => <Severity severity={row.severity} />,
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
    align: "center",
    valueGetter: (state) => ALERT_STATE_LABELS[state],
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
  showClosed: boolean;
  excludeId?: number;
  defaultQuery?: string;
}

const AlertListDataGrid = ({ showClosed, excludeId, defaultQuery = "" }: AlertListDataGridProps) => {
  const [query, setQuery] = useState<string>(defaultQuery);
  const [alerts, setAlerts] = useState<Alert[]>(SAMPLE_ALERTS);

  useEffect(() => {
    let visibleAlerts = SAMPLE_ALERTS;

    // filter out optional exclusion
    if (excludeId) {
      visibleAlerts = visibleAlerts.filter((alert) => alert.id !== excludeId);
    }

    // filter out closed alerts
    if (!showClosed) {
      visibleAlerts = visibleAlerts.filter((alert) => alert.state !== AlertState.Closed);
    }

    // filter alerts by command language
    if (query) {
      const queryParts = query.split(",");
      queryParts.forEach((queryTerm) => {
        const [key, value] = queryTerm.split("=");
        visibleAlerts = visibleAlerts.filter((alert) => alert[key.toLowerCase() as keyof Alert] === value);
      });

      setAlerts(visibleAlerts)
    }

    setAlerts(visibleAlerts)
  }, [showClosed, query, excludeId]);

  return (
    <Stack direction="column" spacing={2}>
      <AlertListSearch onSearch={setQuery} defaultQuery={defaultQuery} />

      <DataGrid
        rows={alerts}
        columns={columns}
        getRowClassName={({ row }) => ALERT_STATE_LABELS[row.state]}
        sx={{
          [`.${AlertState.Closed}`]: {
            bgcolor: "grey",
            "&:hover": {
              bgcolor: "darkgrey"
            }
          }
        }}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </Stack>
  );
}

export default AlertListDataGrid;
