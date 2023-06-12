import { Router } from 'express'
import {realizarPedido, verificarPedido, pedidoEnviado} from '../controllers/restaurant.controller'

const router = Router()

router.post('/realizarPedido', realizarPedido)
router.get('/verificarPedido', verificarPedido)
router.get('/pedidoEnviado', pedidoEnviado);
export default router

