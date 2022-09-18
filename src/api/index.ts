import { Router } from "express";
import healthCheckRoute from "./healthcheck";
import petsRoute from "./pets/routes";

export default (): Router => {
  const app = Router();
  //TODO: add routes here...
  app.use("/health", healthCheckRoute);
  app.use("/pets", petsRoute);
  return app;
};
