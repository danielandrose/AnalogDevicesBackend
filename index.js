import express from 'express'
import temperatureRoutes from './routes/temperature.route.js'
import tyrePressureRoutes from './routes/tyre-pressure.route.js'
import connectDB from './lib/db.js';
import cors from 'cors'

const app = express();
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB();

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Welcome Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    background-color: #f0f8ff;
                    margin: 0;
                    padding: 0;
                }
                header {
                    background-color: #4CAF50;
                    color: white;
                    padding: 1em 0;
                    font-size: 24px;
                }
                p {
                    font-size: 18px;
                    color: #333;
                }
                ul{
                    list-style: none;
                }
            </style>
        </head>
        <body>
            <header>
                Analog Electronic Project
            </header>
            <main>
                <h2>Done By</h2>
                <ul>
                    <li>Daniel Androse P</li>
                    <li>Janarthanan G</li>
                    <li>Hariyeswanth S</li>
                    <li>Gowshik M</li>
                    <li>Guru Prasath E</li>
                </ul>
            </main>
        </body>
        </html>
    `);
});


app.use('/batteryPercentage', temperatureRoutes)
app.use('/tyre-pressure', tyrePressureRoutes)

app.listen(PORT, () => {
    console.log(`The server running at port http://localhost:${PORT}`)
})