import CreateJob from "../pages/jobs/CreateJob";
import EditJob from "../pages/jobs/EditJob";
import Jobs from "../pages/jobs/Jobs";

const routesMap = [
  {
    path: "/",
    element: <Jobs />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/jobs/new",
    element: <CreateJob />,
  },
  {
    path: "/jobs/:jobId/edit",
    element: <EditJob />,
  },
];

export default routesMap;
