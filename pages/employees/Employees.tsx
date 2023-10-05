import * as React from "react";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  NativeSelect,
  Grid,
  Autocomplete,
  TextField,
} from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const RESULTS_OPTIONS = [10, 20, 50, 100, "All"]; // Available options for results per page

let totalResults = 10; // Total number of results to display, initialized to 10

// Function to create an order data row
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Employees() {
  const [numResults, setNumResults] = React.useState<number>(10); // State to store the number of results per page

  // Event handler for changing the number of results per page
  const handleResultsChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setNumResults(event.target.value as number);
    reload();
  };

  // Function to reload data based on new settings
  const reload = async () => {
    await queryClient.refetchQueries({ queryKey: ["repoData"] });
  };

  return (
    <React.Fragment>
      <Grid container spacing={12}>
        {/* Grid items for the Show per Page selector and Search bar */}
        <Grid item xs={6} md={6}>
          {/* Show per Page Selector */}
          <FormControl sx={{ width: 1 / 4, mb: 2 }} size="small">
            <InputLabel variant="standard" htmlFor="results-select">
              Show per Page
            </InputLabel>
            <NativeSelect
              value={numResults}
              inputProps={{
                name: "numResults",
                id: "results-select",
              }}
              onChange={handleResultsChange}
            >
              {RESULTS_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={4}>
          {/* Search Bar */}
          {/* <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            size="small"
            options={.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          /> */}
          ;
        </Grid>
      </Grid>
      {/* Table to display employee data */}
      <Table size="small">
        <TableHead>
          {/* Table headers */}
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Telephone Number</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Manager</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        {/* QueryClientProvider to manage API data */}
        <QueryClientProvider client={queryClient}>
          <AllEmployees />
        </QueryClientProvider>
      </Table>
      {/* Link to view more data */}
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </React.Fragment>
  );
}

interface ManagerNameProps {
  managerID: string;
}

function ManagerName({ managerID }: ManagerNameProps) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["managerData", managerID],
    queryFn: () =>
      fetch("/api/manager?managerID=" + managerID).then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  return <TableCell>{data.fullName}</TableCell>;
}

function AllEmployees() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch("/api/employees").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";
  let limitedData = data.slice(0, totalResults);
  return (
    <TableBody>
      {/* Render employee data rows */}
      {limitedData.map((employee: any) => (
        <TableRow key={employee._id}>
          <TableCell>
            <Link href="/employees/edit">Edit</Link> Deactivate
          </TableCell>
          <TableCell>{employee.firstName}</TableCell>
          <TableCell>{employee.lastName}</TableCell>
          <TableCell>{employee.telephoneNumber}</TableCell>
          <TableCell>{employee.emailAddres}</TableCell>

          {/* Component to fetch and display manager's name */}
          <QueryClientProvider client={queryClient}>
            <ManagerName managerID={employee.employeeManager} />
          </QueryClientProvider>

          <TableCell>{employee.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
