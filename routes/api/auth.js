import express from 'express'
import auth from '../../middleware/auth.js'
import User from '../../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import signToken from '../../helpers/signToken.js'

const router = express.Router()

// @route  GET api/users
// @desc   test route
// @access public
router.post('/auth/login', auth, async (req, res) => {
  const { userName, email, password } = req.body
  try {
    let user = await User.findOne({ email })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'invalid password.' }] })
    }
    const payload = {
      user: {
        id: user.id,
      },
    }
    if (user) {
      const token = signToken(payload)
      res.status(201).json(token).end()
    } else if (!user) {
      res.status(405).json({ errors: [{ msg: 'no such user' }] })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
})

export default router
