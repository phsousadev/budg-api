import bcrypt from 'bcrypt'

class SessionService {
  async checkPassword(password, validPassword) {
    return await bcrypt.compare(password, validPassword)
  }
}

export default new SessionService()