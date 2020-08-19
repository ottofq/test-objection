import { Router } from "express";

import userController from "./controllers/userController";
import menuController from "./controllers/menuController";
import ratingController from "./controllers/ratingController";

const routes = Router();

routes.post("/users", userController.create);
routes.get("/users", userController.list);
routes.get("/users/:user_id/ratings", userController.listRating);

routes.post("/menus", menuController.create);
routes.get("/menus", menuController.list);
routes.get("/ratings/:menu_id", menuController.listRating);

routes.post("/ratings", ratingController.create);
routes.get("/ratings", ratingController.list);
routes.get("/avg/:menu_id", ratingController.avg);
routes.get("/comments/:menu_id", ratingController.listComments);

export default routes;
