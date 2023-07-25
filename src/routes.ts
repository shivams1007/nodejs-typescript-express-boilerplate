import express from "express";
import { RoleRoutes } from "./modules/v1/role/role.routes";



export class Routes {
  router = express.Router();

  path() {
    this.router.use('/role', new RoleRoutes().router);

    return this.router;
  }
}
