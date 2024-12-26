import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../Components/Dashboard/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mockDataContacts = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, Springfield",
      city: "Springfield",
      zipCode: "12345",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+1 (555) 987-6543",
      address: "456 Elm St, Shelbyville",
      city: "Shelbyville",
      zipCode: "54321",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      phone: "+1 (555) 789-1234",
      address: "789 Oak St, Capital City",
      city: "Capital City",
      zipCode: "67890",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alicebrown@example.com",
      phone: "+1 (555) 654-7890",
      address: "101 Pine St, Ogdenville",
      city: "Ogdenville",
      zipCode: "45678",
    },
    {
      id: 5,
      name: "Chris Green",
      email: "chrisgreen@example.com",
      phone: "+1 (555) 321-6549",
      address: "202 Maple St, North Haverbrook",
      city: "North Haverbrook",
      zipCode: "98765",
    },
  ];
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
