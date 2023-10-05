import React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SideBar from "../components/Sidebar";
import Filter from "./Filters";
import Departments from "./Departments";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const MainContent = styled("main")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
}));

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar />
        <MainContent>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Filters */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Filter />
                </Paper>
              </Grid>

              {/* Department list */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Departments />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </MainContent>
      </Box>
    </ThemeProvider>
  );
}
