import { Router } from "express";

import HealthCheckController from "./app/controllers/HealthCheckController";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router()

routes.get('/health', HealthCheckController.index)
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

/**
 * Requires the user to be authenticated
 */
routes.put('/users', UserController.update)

export default routes