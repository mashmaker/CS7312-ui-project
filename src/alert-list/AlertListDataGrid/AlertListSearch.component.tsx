import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";

export type AlertListSearchProps = {
  onSearch: (newQuery: string) => void;
  defaultQuery?: string;
}

const AlertListSearch = ({ onSearch, defaultQuery }: AlertListSearchProps) => {
  const [newQuery, setNewQuery] = useState<string>("");

  const handleSearch = useCallback<React.FormEventHandler<HTMLFormElement>>((evt) => {
    onSearch(newQuery);
    evt.preventDefault();
  }, [onSearch, newQuery]);

  return (
    <form onSubmit={handleSearch}>
      <Stack direction="row" spacing={4}>
        <TextField
          id="search"
          type="text"
          fullWidth
          label="Search.."
          defaultValue={defaultQuery}
          helperText="Syntax: fieldname1=value1,fieldname2=value2 (ex. state=New,severity=Critical)"
          onChange={(evt) => setNewQuery(evt.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ height: "50px" }}
        >
            <Typography>Search</Typography>
            <SearchOutlinedIcon sx={{ marginLeft: 1 }} />
        </Button>
      </Stack>
    </form>
  )
};

export default AlertListSearch;
