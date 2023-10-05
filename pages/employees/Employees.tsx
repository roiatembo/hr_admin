import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
let totalResults = 10;
async function reload() {
  await queryClient.refetchQueries({ queryKey: ["repoData"] });
  console.log("reloaded", totalResults);
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

// Generate Order Data
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

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Employees() {
  return (
    <React.Fragment>
      <Grid container spacing={12}>
        <Grid item xs={6} md={6}>
          <FormControl sx={{ width: 1 / 4, mb: 2 }} size="small">
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Show per Page
            </InputLabel>
            <NativeSelect
              defaultValue={10}
              inputProps={{
                name: "numResults",
                id: "uncontrolled-native",
              }}
              onChange={(event: object) => {
                totalResults = event.target.value;
                console.log(totalResults);
                reload();
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={30}>All</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={4}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            size="small"
            options={top100Films.map((option) => option.title)}
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
          />
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
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
        <QueryClientProvider client={queryClient}>
          <AllEmployees />
        </QueryClientProvider>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}

interface ManagerNameProps {
  managerID: string;
}

interface ResultsProps {
  numResults: number;
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
      {limitedData.map((employee: any) => (
        <TableRow key={employee._id}>
          <TableCell>Edit Deactivate</TableCell>
          <TableCell>{employee.firstName}</TableCell>
          <TableCell>{employee.lastName}</TableCell>
          <TableCell>{employee.telephoneNumber}</TableCell>
          <TableCell>{employee.emailAddres}</TableCell>

          <QueryClientProvider client={queryClient}>
            <ManagerName managerID={employee.employeeManager} />
          </QueryClientProvider>

          <TableCell>{employee.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
