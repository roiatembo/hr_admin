import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Title from "../components/Title";
import { TextField, Stack } from "@mui/material";

export default function CreateEmployee() {
  const theme = useTheme();

  // Event handler for form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <React.Fragment>
      <Title>Create Employee</Title>
      <Box
        component="form"
        onSubmit={handleSubmit} // Attach the form submission handler
        noValidate
        sx={{ mt: 1, justifyContent: "center" }}
      >
        {/* TextField components for employee details */}
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
        />
        <TextField
          margin="normal"
          required
          fullWidth
          size="small"
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />

        {/* Button components for form actions */}
        <Stack sx={{ mt: 4 }} spacing={2} direction="row">
          <Button variant="contained" type="submit">
            Save
          </Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>
    </React.Fragment>
  );
}
