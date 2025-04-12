import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const LowSeverity = () => (
  <Box sx={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#568203",
  }}>
    <Typography textAlign="center" fontWeight="bold" color="#000">Low</Typography>
    <KeyboardDoubleArrowDownIcon sx={{ color: "#000" }} />
  </Box>
)

export default LowSeverity;
