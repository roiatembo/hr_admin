import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Title from "../components/Title";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function CreateEmployee() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Create Employee</Title>
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
        <TextField
          margin="normal"
          required
          fullWidth
          size="small"
          id="surname"
          label="Surname"
          name="surname"
          autoComplete="surname"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          size="small"
          id="telephone"
          label="Telephone Number"
          name="telephone"
          autoComplete="telephone"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          size="small"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Stack sx={{ mt: 4 }} spacing={2} direction="row">
          <Button variant="contained">Save</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>
    </React.Fragment>
  );
}
