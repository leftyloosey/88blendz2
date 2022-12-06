import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import express from 'express'
import auth from './routes/api/auth.js'
// import appts from './routes/api/appts.js'
import profile from './routes/api/profile.js'
import users from './routes/api/users.js'
// import bcrypt from 'bcrypt'

const app = express()
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5002

dotenv.config()

connectDB()

app.get('/', (req, res) => res.send('api running'))

app.use('/routes/api/', auth)
// app.use('/routes/api/', posts)
app.use('/routes/api/', profile)
app.use('/routes/api/', users)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
