import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ALERT_SEVERITY_LABELS, AlertSeverity } from "../../alert/alert.type";

const HighSeverity = () => (
  <Box sx={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4F00",
  }}>
    <Typography textAlign="center" fontWeight="bold">{ALERT_SEVERITY_LABELS[AlertSeverity.High]}</Typography>
    <KeyboardArrowUpIcon />
  </Box>
)

export default HighSeverity;
