import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import WorkHistoryIcon from "@mui/icons-material/WorkOutline";
import Link from "@mui/material/Link";

export const mainListItems = (
  <React.Fragment>
    <Link href="/employees" underline="none" color="inherit">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link href="/departments" underline="none" color="inherit">
      <ListItemButton>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Departments" />
      </ListItemButton>
    </Link>
    <Link href="/employees/create" underline="none" color="inherit">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create/Edit Employee" />
      </ListItemButton>
    </Link>
    <Link href="/departments/create" underline="none" color="inherit">
      <ListItemButton>
        <ListItemIcon>
          <WorkHistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Create/Edit Departments" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
