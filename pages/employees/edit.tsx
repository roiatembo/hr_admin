import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import EditEmployee from "./EditEmployee";
import SideBar from "../components/Sidebar";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";

// Create a default theme
const defaultTheme = createTheme();

// Define the Create component as a NextPage component
const Create: NextPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            // Add padding and margin styles here if needed
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
                  }}
                >
                  {/* Include EditEmployee component */}
                  <EditEmployee />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

// Define the getServerSideProps function for server-side rendering
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

export default Create;
