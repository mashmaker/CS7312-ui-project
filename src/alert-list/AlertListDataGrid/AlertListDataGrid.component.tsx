import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DateTime } from 'luxon';

import { type Alert, ALERT_STATE_LABELS, AlertState } from "../../alert/alert.type";
import Severity from '../../shared/Severity.component';
import AlertListSearch from './AlertListSearch.component';
import { useSampleAlerts } from '../../alert/use-sample-alerts.hook';

const columns: GridColDef<Alert>[] = [
  {
    field: 'createdOn',
    headerName: 'Age',
    width: 150,
    headerAlign: "center",
    align: "center",
    valueGetter: (_value, row) => {
      const diff = DateTime.now().diff(DateTime.fromJSDate(row.createdOn), [
          'years',
          'months',
          'days',
          'hours',
          'minutes',
          'seconds',
        ]);

        const years = Math.floor(diff.years);
        if (years > 0) {
          return years === 1 ? '1 year' : `${years} years`;
        }

        const months = Math.floor(diff.months);
        if (months > 0) {
          return months === 1 ? '1 month' : `${months} months`;
        }

        const days = Math.floor(diff.days);
        if (days > 0) {
          return days === 1 ? '1 day' : `${days} days`;
        }

        const hours = Math.floor(diff.hours);
        if (hours > 0) {
          return hours === 1 ? '1 hour' : `${hours} hours`;
        }

        const minutes = Math.floor(diff.minutes);
        if (minutes > 0) {
          return minutes === 1 ? '1 minute' : `${minutes} minutes`;
        }

        const seconds = Math.floor(diff.seconds);
        if (seconds > 0) {
          return seconds === 1 ? '1 second' : `${seconds} seconds`;
        }

        return 'now';
    }
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

  const { alerts } = useSampleAlerts();
  const [visibleAlerts, setVisibleAlerts] = useState<Alert[]>(alerts);

  useEffect(() => {
    const queryParts = query.split(",");

    setVisibleAlerts((oldVisibleAlerts) => oldVisibleAlerts.filter((alert) => {
      if (alert.id === excludeId) {
        return false;
      }

      // filter out closed alerts
      if (!showClosed && alert.state === AlertState.Closed) {
        return false;
      }

      // filter by command language
      if (queryParts.length > 0) {
        return queryParts.every((queryTerm) => {
          const [key, value] = queryTerm.split("=");
          return alert[key.toLowerCase() as keyof Alert] === value;
        });
      }

      return true;
    }));
  }, [showClosed, query, excludeId]);

  return (
    <Stack direction="column" spacing={2}>
      <AlertListSearch onSearch={setQuery} defaultQuery={defaultQuery} />

      <DataGrid
        rows={visibleAlerts}
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
