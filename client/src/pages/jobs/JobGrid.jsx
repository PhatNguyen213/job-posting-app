import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import DataGrid from "../../components/grid/DataGrid";
import dayjs from "dayjs";

export default function JobGrid({
  data,
  pagination,
  onPaginationModelChange,
  onDeleteJob,
}) {
  const navigate = useNavigate();

  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "expiry_date",
      headerName: "Expiry Date",
      type: "date",
      width: 180,
    },
    {
      field: "created_at",
      type: "datetime",
      valueFormatter: (value) => dayjs(value).format("DD/MM/YYYY hh:mm A"),
      headerName: "Created At",
      type: "date",
      width: 200,
    },
    {
      field: "updated_at",
      headerName: "Updated At",
      type: "datetime",
      valueFormatter: (value) => dayjs(value).format("DD/MM/YYYY hh:mm A"),
      width: 200,
    },
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
            onClick={() => onDeleteJob(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleEditClick = (id) => () => {
    navigate(`/jobs/${id}/edit`);
  };

  const { totalCount, result } = data;

  return (
    <DataGrid
      rows={result}
      rowCount={totalCount}
      columns={columns}
      paginationModel={pagination}
      onPaginationModelChange={onPaginationModelChange}
    />
  );
}
