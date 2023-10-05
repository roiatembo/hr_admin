import React from "react";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/lib/types";
import { NextRouter, useRouter } from "next/router";

const defaultTheme = createTheme();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const router: NextRouter = useRouter();

  // Function to handle form submission
  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();

      // If response is not okay, throw an error
      if (!response.ok) {
        throw new Error(responseData.message || "Submitting form failed");
      }

      // Extract token from response data and store it in local storage
      const { token } = responseData;
      localStorage.setItem("token", token);

      // Redirect to the employees page after successful login
      router.push("/employees");
    } catch (error) {
      // Handle errors, for example, display an error message to the user
      setError("username", {
        type: "manual",
        message: "Invalid username",
      });
      setError("password", {
        type: "manual",
        message: "Invalid password",
      });
    }
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
            {/* Input fields for username and password */}
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
              autoComplete="current-password"
            />
            {/* Display error messages for username and password fields */}
            {errors.username && (
              <Typography variant="body2" color="error">
                {errors.username.message}
              </Typography>
            )}
            {errors.password && (
              <Typography variant="body2" color="error">
                {errors.password.message}
              </Typography>
            )}
            {/* Submit button */}
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
