import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Title from "../components/Title";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function CreateDepartment() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Create/Edit Departments</Title>
      <Box
        component="form"
        // onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1, justifyContent: "center" }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          size="small"
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <FormControl sx={{ mt: 4 }} size="small" fullWidth>
          <InputLabel id="demo-simple-select-label">Manager</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="manager"
            label="Manager"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Active Only</MenuItem>
            <MenuItem value={20}>All</MenuItem>
            <MenuItem value={30}>Deactive Only</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 4 }} size="small" fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="status"
            label="Status"
            // onChange={handleChange}
          >
            <MenuItem value={10}>-Select-</MenuItem>
            <MenuItem value={20}>Active</MenuItem>
            <MenuItem value={30}>Deactive Only</MenuItem>
          </Select>
        </FormControl>
        <Stack sx={{ mt: 4 }} spacing={2} direction="row">
          <Button variant="contained">Save</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>
    </React.Fragment>
  );
}
