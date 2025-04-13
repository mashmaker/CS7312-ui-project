import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export type AlertListSearchProps = {
  onSearch: (newQuery: string) => void;
}

const AlertListSearch = ({ onSearch }: AlertListSearchProps) => {
  const [newQuery, setNewQuery] = useState<string>("");

  const handleSearch = () => onSearch(newQuery);

  return (
    <Stack direction="row" spacing={4}>
      <TextField id="search" type="text" fullWidth placeholder="Search.." onBlur={(evt) => setNewQuery(evt.target.value)} />

      <Button onClick={handleSearch} variant="contained" sx={{ width: "150px" }}>
        <Typography>Search</Typography>
        <SearchOutlinedIcon sx={{ marginLeft: 1 }} />
      </Button>
    </Stack>
  )
};

export default AlertListSearch;
