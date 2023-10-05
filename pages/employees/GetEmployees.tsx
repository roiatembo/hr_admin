import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

export default function GetEmployees() {
  return (
    <TableBody>
      {limitedData.map((employee: any) => (
        <TableRow key={employee._id}>
          <TableCell>Edit Deactivate</TableCell>
          <TableCell>{employee.firstName}</TableCell>
          <TableCell>{employee.lastName}</TableCell>
          <TableCell>{employee.telephoneNumber}</TableCell>
          <TableCell>{employee.emailAddres}</TableCell>

          {/* <QueryClientProvider client={queryClient}>
            <ManagerName managerID={employee.employeeManager} />
          </QueryClientProvider> */}

          <TableCell>{employee.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
