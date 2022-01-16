const { NODE_ENV = 'production' } = process.env
import express from 'express'
import dotenv from 'dotenv'
dotenv.config({ path: `.env.${NODE_ENV}` })

const { API_PORT } = process.env

const app = express()
app.use(express.json())

app.get('/api', (_req, res) => {
  return res.send(
    `This is API for diamondcar! We are currently running on ${NODE_ENV} environment.`
  )
})

app.listen(API_PORT, () =>
  console.log(
    `Server is running at port ${API_PORT} in ${NODE_ENV} environment.`
  )
)
