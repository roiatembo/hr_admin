import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Title from "../components/Title";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function Filters() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Filters</Title>
      <Box
        component="form"
        // onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1, justifyContent: "center" }}
      >
        <FormControl size="small" fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="status"
            label="Status"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Active Only</MenuItem>
            <MenuItem value={20}>All</MenuItem>
            <MenuItem value={30}>Deactive Only</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{ mt: 3 }}
          variant="contained"
          startIcon={<FilterAltIcon />}
        >
          Filter
        </Button>
      </Box>
    </React.Fragment>
  );
}
