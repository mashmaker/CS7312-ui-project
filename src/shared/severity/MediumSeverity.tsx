import { Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const MediumSeverity = () => (
  <Box sx={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFBA00",
    textAlign: "center",
    fontWeight: "bold",
  }}>
    Medium
    <KeyboardArrowDownIcon />
  </Box>
)

export default MediumSeverity;
