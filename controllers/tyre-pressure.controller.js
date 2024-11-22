import TyrePressure from '../models/tyrePressure.model.js'

export const typePressureIndex = async(req, res) => {
    try{
        const tyrePressure = await TyrePressure.find()
        return res.json(tyrePressure)
    } catch(err){
        return res.status(500).json({message:err.message})
    }
}



export const tyrePressureCreate = async(req, res) => {
    const newTyrePressure = new TyrePressure({
        value: req.body.value
    })

    try {
        const tyrePressure = await newTyrePressure.save();
        return res.status(200).json(tyrePressure)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

export const tyrePressureDelete = (req, res) => {
    res.send("HJL")
}