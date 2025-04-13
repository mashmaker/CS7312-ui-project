import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { AlertState } from "../alert/alert.type";
import clsx from "clsx";

export type AlertBreadcrumbsProps = {
  alertState: AlertState
};

const AlertBreadcrumbs = ({ alertState }: AlertBreadcrumbsProps) => {
  const breadcrumbs = [
    <Typography variant="h6" className={clsx("breadcrumb-item", { active: alertState === AlertState.New })}>{AlertState.New}</Typography>,
    <Typography variant="h6" className={clsx("breadcrumb-item", { active: alertState === AlertState.Triage })}>{AlertState.Triage}</Typography>,
    <Typography variant="h6" className={clsx("breadcrumb-item", { active: alertState === AlertState.Investigating })}>{AlertState.Investigating}</Typography>,
    <Typography variant="h6" className={clsx("breadcrumb-item", { active: alertState === AlertState.Review })}>{AlertState.Review}</Typography>,
    <Typography variant="h6" className={clsx("breadcrumb-item", { active: alertState === AlertState.Escalated })}>{AlertState.Escalated}</Typography>,
    <Typography variant="h6" className={clsx("breadcrumb-item", { active: alertState === AlertState.Closed })}>{AlertState.Closed}</Typography>,
  ];

  return (
    <Box sx={{
      borderTop: "1px solid gray",
      borderBottom: "1px solid gray",
      paddingY: 1,
      paddingX: 2,
      '.active': {
        color: "black",
        backgroundColor: '#7BA05B'
      },
      '.breadcrumb-item': {
        padding: '4px 8px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
      },
    }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
}

export default AlertBreadcrumbs;
