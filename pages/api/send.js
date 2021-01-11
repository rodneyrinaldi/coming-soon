
export default (req, res) => {
  try {

    res.statusCode = 200
    res.json({ status: 'Enviado com sucesso' })

  } catch (error) {

    res.statusCode = 400
    res.json({ status: 'Erro no envio' })

  }

}