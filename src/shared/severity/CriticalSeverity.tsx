import { Box } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const CriticalSeverity = () => (
  <Box sx={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7C0902",
    textAlign: "center",
    fontWeight: "bold",
  }}>
    Critical
    <KeyboardDoubleArrowUpIcon />
  </Box>
)

export default CriticalSeverity;
