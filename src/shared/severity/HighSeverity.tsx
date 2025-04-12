import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const HighSeverity = () => (
  <Box sx={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4F00",
  }}>
    <Typography textAlign="center" fontWeight="bold">High</Typography>
    <KeyboardArrowUpIcon />
  </Box>
)

export default HighSeverity;
