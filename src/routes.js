import { Router } from "express";

const routes = new Router()

routes.get('/health', async (request, response) => {
  return response.status(200).json({
    message: 'Hello World ....'
  })
})

export default routes