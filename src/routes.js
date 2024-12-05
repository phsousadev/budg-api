import { Router } from "express";

import HealthCheckController from "./app/controllers/HealthCheckController";
import UserController from "./app/controllers/UserController";

const routes = new Router()

routes.get('/health', HealthCheckController.index)

routes.post('/users', UserController.store)

/**
 * Requires the user to be authenticated
 */
routes.put('/users', UserController.update)

export default routes