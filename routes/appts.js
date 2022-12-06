import express from 'express'
// import config from 'config'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import signToken from '../../helpers/signToken.js'
import User from '../../models/User.js'
const router = express.Router()

export default router
