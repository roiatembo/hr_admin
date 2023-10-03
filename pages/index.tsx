import React from "react";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
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

  const onSubmit = async (data: LoginSchema) => {
    try {
      // const response = await fetch("/api/login/route", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      // const responseData = await response.json();

      // if (!response.ok) {
      //   throw new Error(responseData.message || "Submitting form failed");
      // }

      // if (responseData.errors) {
      //   const errors = responseData.errors;
      //   if (errors.username) {
      //     setError("username", {
      //       type: "server",
      //       message: errors.username,
      //     });
      //   } else if (errors.password) {
      //     setError("password", {
      //       type: "server",
      //       message: errors.password,
      //     });
      //   } else {
      //     throw new Error("Unknown server error");
      //   }
      // } else {
      //   //handle successful login
      //   console.log("are we here");
      //   router.push("/employees");
      // }
      router.push("/employees");
    } catch (error) {
      console.error("This motherfucker:", error);
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
              autoComplete="current-password" // Use "current-password" for password fields
            />
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
