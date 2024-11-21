
import Temperature from "../models/temperature.model.js"

export const temperatureIndex = async(req, res) => {
    try{
        const temperature = await Temperature.find()
        return res.json(temperature)
    } catch(err){
        return res.status(500).json({message:err.message})
    }
}

export const temperatureCreate = async (req, res) => {
    const newTemperature = new Temperature({
        value: req.body.value
    })

    try {
        const temperature = await newTemperature.save();
        return res.status(200).json(temperature)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

export const temperatureDelete = (req, res) => {
    res.json({
        message:"I am working on delete and update"
    })
}
