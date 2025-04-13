import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { type Alert, AlertState } from "../alert/alert.type";
import Severity from '../shared/Severity.component';

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
))

export default AlertListDataGrid;
