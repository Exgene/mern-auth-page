import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/users.js'

const router = express.Router()

router.post('/register', async (req, res) => {
  const { username, password, confirmPassword } = req.body
  try {
    const user = await UserModel.findOne({ username }) //.findOne({username})
    const allUsers = await UserModel.find()
    console.log(allUsers)
    if (user) {
      console.log('The Particular user already exists!\n' + user)
      return res.json({ message: 'User Already Exists!', statusCode: 0 })
    }
    if (password != confirmPassword) {
      console.log('Password Mismatch')
      return res.json({ message: 'Password Mismatch', statusCode: 0 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new UserModel({ username, password: hashedPassword })
    await newUser.save()

    console.log(newUser)
    res.json({ message: 'Successfully Registered the User!', statusCode: 1 })
  } catch (error) {
    console.log('Error during Register! Speicific Message:', error)
  }
})

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await UserModel.findOne({ username })

    if (!user) {
      console.log('User Not Found!')
      return res.json({ message: 'User was not Found!', statusCode: 0 })
    }

    const IsValidPassword = await bcrypt.compare(password, user.password)
    if (!IsValidPassword) {
      console.log('Invalid Password!')
      return res.json({ message: 'Invalid Password!', statusCode: 0 })
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET)
    console.log('Succesfully Logged In!')
    res.json({
      message: 'Succesfully Logged In',
      token,
      id: user._id,
      statusCode: 1,
    })
  } catch (error) {
    console.log('Error Found!:', error)
    res.json({ error: 'Error exists!' + error })
  }
})

export { router as userRouter }
