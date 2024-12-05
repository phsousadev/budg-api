import jwt from 'jsonwebtoken'

import { promisify } from 'node:util'

import authConfig from '../../config/auth'

export default async (request, response, next) => {
  const authorization = request.headers.authorization

  if (!authorization) return response.status(401).json({
    message: 'Authentication failed'
  })

  const [, token] = authorization.split(' ')


  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    request.userId = decoded.id

    return next()
  } catch (error) {
    return response.status(401).json({
      message: 'Authentication failed'
    })
  }
}