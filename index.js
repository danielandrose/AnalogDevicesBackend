import express from 'express'
import temperatureRoutes from './routes/temperature.route.js'
import tyrePressureRoutes from './routes/tyre-pressure.route.js'
import connectDB from './lib/db.js';

const app = express();
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB();

app.get("/", (req, res) => {
    res.json({
        "message": "Hello Studens"
    })
})

app.use('/temperature', temperatureRoutes)
app.use('/tyre-pressure', tyrePressureRoutes)

app.listen(PORT, () => {
    console.log(`The server running at port http://localhost:${PORT}`)
})