/* ROUTES CONFIGURATION FILE */
import { Router } from "express";

/* CONTROLLERS */
import UserController from "./app/controllers/UserController";
import NewsController from "./app/controllers/NewsController";
import SessionController from "./app/controllers/SessionController";

/* MIDDLEWARES */
import authStateData from "./app/middlewares/authStateData";

/* ROUTES*/
const routes = new Router();

routes.get("/news", authStateData, NewsController.show);
routes.post("/news/create", authStateData, NewsController.store);
routes.put("/news/update", authStateData, NewsController.update);
routes.delete("/news/update", authStateData, NewsController.delete);

routes.post("/login", SessionController.store);

routes.get("/users", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users", authStateData, UserController.update);
routes.delete("/users", UserController.delete);

export default routes;
