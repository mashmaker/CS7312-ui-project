import { Box } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const HighSeverity = () => (
  <Box sx={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4F00",
    textAlign: "center",
    fontWeight: "bold",
  }}>
    High
    <KeyboardArrowUpIcon />
  </Box>
)

export default HighSeverity;
