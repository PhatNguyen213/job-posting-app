import { Route, Routes } from "react-router-dom";
import routesMap from "./routes";

const RoutesController = () => (
  <Routes>
    {routesMap.map((routeProps) => (
      <Route key={routeProps.path} {...routeProps} />
    ))}
  </Routes>
);

export default RoutesController;
