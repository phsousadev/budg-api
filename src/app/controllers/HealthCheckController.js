class HealthCheckController {
  async index(request, response) {
    return response.status(200).json({
      info: {
        server: true,
        database: true
      }
    })
  }
}

export default new HealthCheckController()