import mongoose from 'mongoose'

const Schema = mongoose.Schema

const apptSchema = new Schema({
  date: {
    type: Date,
  },
})
const Appt = mongoose.model('Appt', apptSchema)

export default Appt
