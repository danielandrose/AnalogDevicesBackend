import express from 'express'
import {
    typePressureIndex,
    tyrePressureCreate,
    tyrePressureDelete
} from "../controllers/tyre-pressure.controller.js"

const router = express.Router()

router.get('/', typePressureIndex)

router.post('/', tyrePressureCreate)

router.delete('/:id', tyrePressureDelete)

export default router;