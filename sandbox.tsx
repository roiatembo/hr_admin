import React from "react";
import { Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const Sidebar: React.FC = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={classes.toolbar} />
        <List>
          <ListItem button>
            <Link href="/employees">
              <ListItemText primary="Employees" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/departments">
              <ListItemText primary="Departments" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link href="/create-edit-employee">
              <ListItemText primary="Create/Edit Employee" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/create-edit-department">
              <ListItemText primary="Create/Edit Department" />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
