import fs from 'fs'

const status = '' 
const file = 'logs.txt'

export const realizarPedido = (req, res) => {
  const {plato} = req.body;
  status = 'pendiente';
  console.log('se realizo  de la orden: ' + plato);
  fs.appendFile(file, '[log]:  se realizo  de la orden: ' + plato)
  return res.status(200).json({ msg: 'true' });
}

export const verificarPedido = (req, res) => {
  console.log('staus: ' + status);
  fs.appendFile(file, '[log]: staus: ' + status);
  return res.status(200).json({ msg: 'true' });
}

export const pedidoEnviado = (req, res) => {
  console.log('El pedido esta listo');
  fs.appendFile(file, '[log]: El pedido esta listo');
  status = 'entregado'
  return res.status(200).json({ msg: 'true' });
}
