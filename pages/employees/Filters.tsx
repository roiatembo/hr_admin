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
        {/* Status Select */}
        <FormControl size="small" fullWidth>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            value={FilterOptions.Active}
            label="Status"
          >
            <MenuItem value={FilterOptions.Active}>Active Only</MenuItem>
            <MenuItem value={FilterOptions.All}>All</MenuItem>
            <MenuItem value={FilterOptions.Deactive}>Deactive Only</MenuItem>
          </Select>
        </FormControl>

        {/* Department Select */}
        <FormControl sx={{ mt: 4 }} size="small" fullWidth>
          <InputLabel id="department-label">Department</InputLabel>
          <Select
            labelId="department-label"
            id="department"
            value={Departments.HumanResources}
            label="Department"
          >
            <MenuItem value={Departments.HumanResources}>
              Human Resources
            </MenuItem>
          </Select>
        </FormControl>

        {/* Manager Select */}
        <FormControl sx={{ mt: 4 }} size="small" fullWidth>
          <InputLabel id="manager-label">Manager</InputLabel>
          <Select
            labelId="manager-label"
            id="manager"
            value={Managers.LilyParker}
            label="Manager"
          >
            <MenuItem value={Managers.LilyParker}>Lily Parker</MenuItem>
          </Select>
        </FormControl>

        {/* Filter Button */}
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

// Enum definitions for better readability
enum FilterOptions {
  Active = "Active",
  All = "All",
  Deactive = "Deactive",
}

enum Departments {
  HumanResources = "Human Resources",
  // Add more departments as needed
}

enum Managers {
  LilyParker = "Lily Parker",
  // Add more managers as needed
}
