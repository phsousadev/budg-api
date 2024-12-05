import jwt from 'jsonwebtoken'
import UserService from "../services/UserService"
import SessionService from '../services/SessionService'

import authConfig from '../../config/auth'

class SessionController {
  async store(request, response) {
    const { email, password } = request.body

    const user = await UserService.findByEmail(email)

    if (!user) return response.status(401).json({
      message: 'Invalid email or password'
    })

    const { id, first_name, last_name, provider, password_hash } = user

    const passwordIsValid = await SessionService.checkPassword(password, password_hash)

    if (!passwordIsValid) return response.status(401).json({
      message: 'Invalid email or password'
    })

    return response.status(200).json({
      user: {
        id,
        first_name,
        last_name,
        provider,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}


export default new SessionController()