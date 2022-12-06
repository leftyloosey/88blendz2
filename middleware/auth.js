// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'
// const config = require('config');
// import config from 'config'

const auth = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token')
  const secret = 'mysecretssshhhhhhh'
  console.log(req.header)
  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  // Verify token
  try {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' })
      } else {
        req.user = decoded.data.user
        next()
      }
    })
  } catch (err) {
    console.error('something wrong with auth middleware')
    res.status(500).json({ msg: 'Server Error' })
  }
}

export default auth
