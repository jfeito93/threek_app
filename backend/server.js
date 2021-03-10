import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import retoRoutes from './routes/retoRoutes.js'


dotenv.config()

connectDB()

const app = express()


app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/retos', retoRoutes)

//Middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))
