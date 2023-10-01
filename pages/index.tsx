import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FieldValues, useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "@/lib/types";
import { resolve } from "path";
import { zodResolver } from "@hookform/resolvers/zod";

const defaultTheme = createTheme();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginSchema) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (!response.ok) {
      alert("Submitting form failed");
      return;
    }
    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.username) {
        setError("username", {
          type: "server",
          message: errors.username,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else {
        alert("Something went wrong");
      }
    }
    // reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...register("username")}
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              {...register("password")}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
            />
            {errors.username && (
              <Typography>{`${errors.username.message}`}</Typography>
            )}
            {errors.password && (
              <Typography>{`${errors.password.message}`}</Typography>
            )}
            <Button
              disabled={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
