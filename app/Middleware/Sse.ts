import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from '@ioc:Adonis/Core/Event';

export default class Sse {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>)
  {
    const stream = response.response
    response.header('Content-Type', 'text/event-stream')
    response.header('Cache-Control', 'no-cache')
    response.header('Connection', 'keep-alive')

    // Configurar un intervalo para mantener la conexión activa
    const keepAliveInterval = setInterval(() => {
      stream.write(':\n\n')
    }, 30000)

    // Limpiar el intervalo cuando se cierra la conexión
    request.request.once('close', () => {
      clearInterval(keepAliveInterval)
    })

    await next()
  }
}
