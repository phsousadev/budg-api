import bcrypt from 'bcrypt'
import User from '../models/User'

class UserService {
  async create(user) {
    const encryptedPassword = await bcrypt.hash(user.password, 8)

    const { id, first_name, last_name, email, provider } = await User.create({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password_hash: encryptedPassword
    })

    return {
      id,
      first_name,
      last_name,
      email,
      provider
    }
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } })
  }
}

export default new UserService()