import express, { Application } from 'express'
import { authRoutes } from './modules/auth-module/auth.routes'
import { tasksRoutes } from './modules/tasks-module/tasks.routes'

const app: Application = express()
const port = 3000

app.use(express.json())
// app.use(express.urlencoded())

app.use('/api/auth', authRoutes)
app.use('/api/tasks', tasksRoutes)

app.listen(port, () => {
    console.log(`app started on port ${port}`);
})
