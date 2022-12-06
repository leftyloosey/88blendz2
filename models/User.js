import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  appts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appt',
    },
  ],
})
const User = mongoose.model('User', userSchema)

export default User
