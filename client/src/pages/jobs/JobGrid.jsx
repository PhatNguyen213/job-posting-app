import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function JobGrid({ rows, setRows }) {
  const navigate = useNavigate();
  // const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState();

  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "expiry_date",
      headerName: "Expiry Date",
      type: "date",
      width: 180,
    },
    { field: "created_at", headerName: "Created At", type: "date", width: 180 },
    { field: "updated_at", headerName: "Updated At", type: "date", width: 180 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleEditClick = (id) => () => {
    navigate(`/jobs/${id}/edit`);
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  return (
    <DataGrid
      style={{ height: "auto", width: "100%" }}
      pageSizeOptions={[10, 25, 50, 100]}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 10, page: 0 },
        },
      }}
      rows={rows}
      columns={columns}
      rowModesModel={rowModesModel}
      onRowModesModelChange={handleRowModesModelChange}
      processRowUpdate={processRowUpdate}
      slotProps={{
        toolbar: { setRows, setRowModesModel },
      }}
    />
  );
}
