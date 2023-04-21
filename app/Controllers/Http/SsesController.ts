import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from '@ioc:Adonis/Core/Event';

export default class SsesController
{
  public async events({ response }: HttpContextContract) {
    // Ejemplo de envío de evento
    const stream = response.response

    setInterval(() => {
      stream.write(`data: ${JSON.stringify({ message: 'Evento de ejemplo' })}\n\n`)
    }, 5000)
  }
}
