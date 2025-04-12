import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const CriticalSeverity = () => (
  <Box sx={{
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7C0902",
  }}>
    <Typography textAlign="center" fontWeight="bold">Critical</Typography>
    <KeyboardDoubleArrowUpIcon />
  </Box>
)

export default CriticalSeverity;
