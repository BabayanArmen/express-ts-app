import express, { Application, Request, Response } from 'express'
import { authRoutes } from './modules/auth-module/auth.routes'

const app: Application = express()
const port = 3000

app.use(express.json())
// app.use(express.urlencoded())

app.use('/auth', authRoutes)

app.listen(port, () => {
    console.log(`app started on port ${port}`);
})
