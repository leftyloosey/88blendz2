import express from 'express'
// import config from 'config'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import signToken from '../../helpers/signToken.js'
import User from '../../models/User.js'
const router = express.Router()

// @route  GET api/users
// @desc   get all users
// @access public

router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route  POST api/users
// @desc   create user
// @access public

router.post('/create', async (req, res) => {
  const { userName, email, password } = req.body
  try {
    const user = new User({
      userName,
      email,
      password,
    })

    const payload = {
      user: {
        id: user.id,
      },
    }
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await user.save()
    const token = signToken(payload)
    res.status(200).json(token)
  } catch (err) {
    console.error(err.message)
    res.status(500).send(err.message)
  }
})

// @route  POST api/users
// @desc  login user
// @access public
router.post('/login', async (req, res) => {
  try {
    const { userName, email, password } = req.body
    let user = await User.findOne({ email })

    if (user) {
      const payload = {
        user: {
          id: user.id,
        },
      }
      const token = signToken(payload)
      res.status(200).json(token)
    } else if (!user) {
      res.status(404).send('User not found.')
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error in /users')
  }
})

export default router
