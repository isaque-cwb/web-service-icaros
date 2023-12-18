import dotenv from 'dotenv'
import express from 'express'
import * as soap from 'soap'

dotenv.config()

const app = express()
const port = process.env.PORT
const url = process.env.URL as string

app.listen(port, () => {
  soap.createClient(url, (err, client) => {
    if (err) {
      console.log(err)
    } else {
      client.WS034FUN(
        {
          user: process.env.USER,
          password: process.env.PASSWORD,
          encryption: 0,
          parameters: {
            adatini: ''
          }
        },
        (err: any, res: any) => {
          if (err) {
            //precisa tratar o erro
            return console.log(err)
          } else {
            return console.log(res.result)
          }
        }
      )
    }
  })
  console.log(`Server is Running... on port ${port}`)
})
