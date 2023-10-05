import React from "react";
import {
  createTheme,
  ThemeProvider,
  Box,
  Toolbar,
  Container,
  Grid,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "../components/Sidebar";
import Filter from "./Filters";
import Employees from "./Employees";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";

const defaultTheme = createTheme();

const Dashboard: NextPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Filters */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 320,
                  }}
                >
                  <Filter />
                </Paper>
              </Grid>

              {/* Employee list */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Employees />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = parseCookies(context);
  if (!token) {
    // If the user is not authenticated, redirect to the login page
    return {
      redirect: {
        destination: "../",
        permanent: false,
      },
    };
  }

  // If the user is authenticated, return an empty object
  return { props: {} };
};

export default Dashboard;
