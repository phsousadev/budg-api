import UserService from "../services/UserService"

class UserController {
  async store(request, response) {
    const { first_name, last_name, email, password } = request.body

    const emailAlreadyExists = await UserService.findByEmail(email)

    if (emailAlreadyExists) return response.status(401).json({
      message: 'Email Already Exists'
    })

    const data = await UserService.create({ first_name, last_name, email, password })

    return response.status(201).json(data)
  }

  async update(request, response) { }
}

export default new UserController()