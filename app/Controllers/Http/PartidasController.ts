// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from '@ioc:Adonis/Core/Event'
import Barco from '../../Models/Barco';

export default class PartidasController
{
  public async enviarAtaque({request, response}: HttpContextContract)
  {
    const [x, y] = request.input('coordenadas')
    const barco = await Barco.query()
    .where((query) => {
      query.whereRaw(`?? = ?`, ['coordenadas.0.0', x])
      query.andWhereRaw(`?? = ?`, ['coordenadas.0.1', y])
    })
    .first()

    if(!barco)
    {

    }







  }

  public async emitEvent({ response }: HttpContextContract) {
    const stream = response.response
    stream.writeHead(200,{
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    })
    Event.on('new_class', (classe) => {

      stream.write(`event: new_class\ndata: ${classe}\n\n`)
    })
    Event.on('delete_class', (classe) => {

      stream.write(`event: delete_class\ndata: ${classe}\n\n`)
    })
  }
}
