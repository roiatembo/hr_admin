import React from "react";
import {
  styled,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../components/Sidebar";
import EditDepartment from "./EditDepartment";

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
              {/* Edit Department Form */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <EditDepartment />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </MainContent>
      </Box>
    </ThemeProvider>
  );
}
