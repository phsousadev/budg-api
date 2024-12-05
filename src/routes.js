import { Router } from "express";

import HealthCheckController from "./app/controllers/HealthCheckController";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

/**
 * Middlewares
 */
import authMiddleware from './app/middlewares/auth'

const routes = new Router()

/**
 * Controller
 * => Health Check
 */
routes.get('/health', HealthCheckController.index)

/**
 * Controller
 * => Users
 */
routes.post('/users', UserController.store)

/**
 * Controller
 * => Sessions
 */
routes.post('/sessions', SessionController.store)

/**
 * Info
 * => Requires the user to be authenticated
 */
routes.use(authMiddleware)

/**
 * Controller
 * => Users
 *  => Requires the user to be authenticated
 */
routes.put('/users', UserController.update)

export default routes