import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCustomers } from "state";
import { useGetCustomersQuery } from "state/api";

const Customers = () => {
  const { data, isLoading } = useGetCustomersQuery();
  const dispatch = useDispatch();
  if (data) {
    dispatch(setCustomers(data));
  }
  const { customers, currentColor } = useSelector((state) => state.global);
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <div>
      <Header title={"CUSTOMERS"} subtitle={"List of customers"} />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { color: currentColor },
          "& .MuiDataGrid-footerContainer": { backgroundColor: currentColor },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: currentColor,
            color: "black",
          },
        }}
      >
        <DataGrid
          loading={isLoading || !customers}
          getRowId={(row) => row._id}
          rows={customers || []}
          columns={columns}
        />
      </Box>
    </div>
  );
};

export default Customers;
