import { Router } from 'express'
import { ping } from '../controllers/client.controller'

const router = Router()

router.get('/ping', ping)

export default router

