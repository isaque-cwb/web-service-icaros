import dotenv from 'dotenv'
import express from 'express'
import { seachDataSeniorSoap } from './seachDataSeniorSoap'

dotenv.config()

const app = express()
app.use(express.json())

const port = process.env.PORT

app.listen(port, () => {
  seachDataSeniorSoap()
  console.log(`Server is Running... on port ${port}`)
})
