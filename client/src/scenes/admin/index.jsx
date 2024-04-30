import React, { useEffect, useState } from "react";
import { Avatar, Box, gridClasses, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import CustomColumnMenu from "../../components/DataGridCustomColumnMenu";
import UsersActions from "./usersActions";
import { grey } from "@mui/material/colors";
import { getUsers } from "../../actions/user";
import Protected from "../protected/Protected";
import { useValue } from '../../context/ContextProvider';
import { tokens } from "../../theme";

const Admin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 
  const {
    state: { openLogin, currentUser,users },
    dispatch,
  } = useValue();
  const [rowId, setRowId] = useState(null)
//console.log(currentUser)
   useEffect(()=>{
    if (users.length===0) getUsers(dispatch)
   },[users])
  
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.75,
      hide: true,
    },
    {
      field: "photoURL",
      headerName: "Avator",
      flex: 0.3,
      renderCell: (params) =><Avatar src={params.row.photoURL}/>,
      sortable: false,
      filterable: false,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.3,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.4,
    },
    {
      field: "active",
      headerName: "Active",
      flex: 0.4,
      type:'boolean',       
      editable: true
    },
   {
      field: "role",
      headerName: "Role",
      flex: 0.4,
      type:'singleSelect', 
      valueOptions:['user', 'admin'],
      editable: true
    },
    {
      field: "interview",
      headerName: "Interview",
      flex: 0.4,
      editable: true
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.3,
      renderCell: (params) => <UsersActions {...{params, rowId , setRowId}}/>
    },
    
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="USERS" subtitle="Managing users and list of users" />
     {(currentUser&&currentUser.role==='admin')?(<Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[400],
            color: colors.greenAccent[200],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: colors.greenAccent[200],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors[200]} !important`,
          },
        }}
      >
         <DataGrid
          loading={openLogin || !users}
          getRowId={(row) => row._id}
          rows={users|| []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
          getRowSpacing={params=>({
            top: params.isFirstVisible ? 0: 5,
            bottom: params.isLastVisible ? 0:5
          })}
          sx={{[`&.${gridClasses.row}`]:{
            bgcolor:theme=>theme.palette.mode==='light'? grey[200]: grey[900]
          }}}
          onCellEditCommit={params=>setRowId(params.id)}
        />
      </Box>):(<Protected/>)}
    </Box>
  );
};

export default Admin;