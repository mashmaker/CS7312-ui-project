import { Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const LowSeverity = () => (
  <Box sx={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#568203",
    textAlign: "center",
    fontWeight: "bold",
  }}>
    Low
    <KeyboardDoubleArrowDownIcon />
  </Box>
)

export default LowSeverity;
