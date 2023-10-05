import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Title from "../components/Title";

export default function Filters() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Filters</Title>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl size="small" fullWidth sx={{ mb: 2, width: "80%" }}>
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            labelId="status-select-label"
            id="status-select"
            label="Status"
            // value={status}
            // onChange={handleStatusChange}
          >
            <MenuItem value={10}>Active Only</MenuItem>
            <MenuItem value={20}>All</MenuItem>
            <MenuItem value={30}>Inactive Only</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" startIcon={<FilterAltIcon />}>
          Filter
        </Button>
      </Box>
    </React.Fragment>
  );
}
