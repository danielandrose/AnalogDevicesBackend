import express from 'express'
import {temperatureIndex,temperatureCreate,temperatureDelete} from "../controllers/temperature.controller.js"

const router = express.Router()

router.get('/',temperatureIndex)

router.post('/',temperatureCreate)

router.delete('/:id',temperatureDelete)

export default router