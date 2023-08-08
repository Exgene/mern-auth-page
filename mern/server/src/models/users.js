import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, unique: true },
})

export const UserModel = mongoose.model('users', UserSchema)

//Look into MongoDB thingie
