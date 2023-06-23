import { Router } from 'express'
import { enviarPedido,  verificarPedido, pedidoEntregado} from '../controllers/delivery.controller'

const router = Router()

router.post('/enviarPedido', enviarPedido);
router.get('/verificarPedido', verificarPedido);
router.get('/pedidoEntregado', pedidoEntregado);


export default router

