// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Event from '@ioc:Adonis/Core/Event'
// import Tablero from '../../Models/Tablero';
import { schema , rules } from '@ioc:Adonis/Core/Validator';
import Partida from 'App/Models/Partida';

export default class PartidasController
{

  public async iniciarPartida({request, response}: HttpContextContract)
  {
    const newSchemaUsers = schema.create({
      user_one: schema.number([rules.required()]),
      user_two: schema.number([rules.required()])
    })

    const payload = await request.validate
    ({
      schema: newSchemaUsers
    })

    const partidaNueva = await Partida.create(payload)
    partidaNueva.save()

    console.log('iniciarPartida')
    return response.json({info: partidaNueva})
  }

  public async emitirAtaque({ response, request }: HttpContextContract) {
    // const stream = response.response
    // stream.writeHead(200, {
    //   'Content-Type': 'text/event-stream',
    //   'Cache-Control': 'no-cache',
    //   'Connection': 'keep-alive',
    //   'Access-Control-Allow-Origin': '*',
    // })

    // Event.on('ataque', (ataque) => {
    //   stream.write(`event: ataque\ndata: ${JSON.stringify(ataque)}\n\n`)
    // })

    // const { coordenadas } = request.only(['coordenadas'])

    // const barco = await Barco.query()
    //   .whereJson('coordenadas', coordenadas)
    //   .first()

    // if (!barco) {
    //   return response.json({ exitoso: false, mensaje: 'No hay un barco en las coordenadas especificadas' })
    // }

    // barco.haSidoAtacado = true
    // await barco.save()

    // Event.emit('ataque', { coordenadas, resultado: barco.haSidoAtacado })

    // return response.json({ exitoso: true, mensaje: 'Ataque exitoso', barco })
  }

  // public async enviarAtaque({response, resquest})
  // {
  //   // Obtener la partida actual
  //   const partida = await Partida.find(partidaId)

  //   // Obtener el tablero correspondiente a la partida actual
  //   const tablero = await partida.related('tablero').firstOrFail()

  //   const { letra, numero } = resquest.only(['letra', 'numero'])
  //   const row = numero - 1 // Restar 1 al número para que concuerde con el índice de la matriz
  //   const col = letra.charCodeAt(0) - 65 // Convertir la letra a su valor ASCII y restar 65 (valor ASCII de 'A') para que concuerde con el índice de la matriz
  //   const tablero = await Tablero.firstOrFail()

  //   if (tablero.mar[row][col] === 'X') {
  //     return response.json({ exitoso: true, mensaje: 'Ataque exitoso' })
  //   } else {
  //     return response.json({ exitoso: false, mensaje: 'No hay un barco en las coordenadas especificadas' })
  //   }

  // }


}
