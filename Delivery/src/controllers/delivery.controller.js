import fs from 'fs'

const status = '' 
const file = 'logs.txt'

export const enviarPedido = (req, res) => {
  const {plato} = req.body;
  status = 'pendiente';
  console.log('se realizo envio de la orden: ' + plato);
  fs.appendFile(file, '[log]: staus: se realizo envio de la orden: ' + plato);
  return res.status(200).json({ msg: 'true' });
}

export const verificarPedido = (req, res) => {
  console.log('staus: ' + status);
  fs.appendFile(file, '[log]: staus: se realizo envio de la orden: ' + plato);
  return res.status(200).json({ msg: 'true' });
}

export const pedidoEntregado = (req, res) => {
  console.log('Se ah entregado el pedido');
  fs.appendFile(file, '[log]: staus: se realizo envio de la orden: ' + plato);
  status = 'entregado'
  return res.status(200).json({ msg: 'true' });
}





 