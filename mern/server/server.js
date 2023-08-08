import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './src/routes/users.js'

const App = express()
dotenv.config()

const PORT = process.env.PORT
const passwordAdmin = process.env.PASSWORD
const clusterName = process.env.CLUSTERNAME

App.use(cors())
App.use(express.json())
App.use('/auth', userRouter)

mongoose.connect(
  `mongodb+srv://admin:${passwordAdmin}@${clusterName}.icknw1o.mongodb.net/?retryWrites=true&w=majority`
)

App.listen(PORT, (err) => {
  if (!err) console.log(`Litsening on Port: ${PORT}!`)
  else console.log('GG failed!')
})
