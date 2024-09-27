import { DataGrid as Grid } from "@mui/x-data-grid";

export default function DataGrid(props) {
  return (
    <Grid
      style={{ height: "auto", width: "100%" }}
      pageSizeOptions={[20, 50, 100]}
      paginationMode="server"
      {...props}
    />
  );
}
