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

  // public async emitirAtaque({ response, request }: HttpContextContract)
  // {
  //   // const stream = response.response
  //   // stream.writeHead(200, {
  //   //   'Content-Type': 'text/event-stream',
  //   //   'Cache-Control': 'no-cache',
  //   //   'Connection': 'keep-alive',
  //   //   'Access-Control-Allow-Origin': '*',
  //   // })

  //   // Event.on('ataque', (ataque) => {
  //   //   stream.write(`event: ataque\ndata: ${JSON.stringify(ataque)}\n\n`)
  //   // })

  //   // const { coordenadas } = request.only(['coordenadas'])

  //   // const barco = await Barco.query()
  //   //   .whereJson('coordenadas', coordenadas)
  //   //   .first()

  //   // if (!barco) {
  //   //   return response.json({ exitoso: false, mensaje: 'No hay un barco en las coordenadas especificadas' })
  //   // }

  //   // barco.haSidoAtacado = true
  //   // await barco.save()

  //   // Event.emit('ataque', { coordenadas, resultado: barco.haSidoAtacado })

  //   // return response.json({ exitoso: true, mensaje: 'Ataque exitoso', barco })
  // }

  public async enviarAtaque({response, request})
  {
    const partidaSchema = schema.create({
      //partidaId: schema.number(),
      numero: schema.number(),
      letra: schema.string({trim: true})
    })

    const payload = await request.validate
    ({schema: partidaSchema,
      messages:
      {
        "partidaId.required": "El id de partida es requerido",
        "numero.required": "El numero es requerido",
        "letra.required": "La letra es requerida"
      }
    });

    // // Obtener la partida actual
    // const partida = await Partida.find(request.partidaId)

    // // Obtener el tablero correspondiente a la partida actual
    // const tablero = await partida.related('tablero').firstOrFail()

    const mar = {
      "mar": [
        [
          "X",
          "O",
          "Y",
          "O",
          "Y",
          "Y",
          "O",
          "X"
        ],
        [
          "X",
          "Y",
          "Y",
          "O",
          "O",
          "Y",
          "O",
          "O"
        ],
        [
          "Y",
          "O",
          "O",
          "X",
          "O",
          "Y",
          "X",
          "O"
        ],
        [
          "X",
          "O",
          "X",
          "Y",
          "O",
          "X",
          "O",
          "O"
        ],
        [
          "O",
          "O",
          "O",
          "X",
          "X",
          "O",
          "O",
          "Y"
        ],
        [
          "O",
          "O",
          "O",
          "O",
          "O",
          "X",
          "Y",
          "X"
        ],
        [
          "O",
          "O",
          "O",
          "Y",
          "X",
          "X",
          "O",
          "Y"
        ],
        [
          "O",
          "Y",
          "Y",
          "O",
          "O",
          "O",
          "O",
          "X"
        ]
      ]
    }

    const lettersToNumbers = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
    };

    const letra = payload['letra']
    const letraConvertidaNumero = lettersToNumbers[letra];
    const numero = payload['numero']

    // const tablero = await Tablero.firstOrFail()

    // if (tablero.mar[row][col] === 'X') {
    //   return response.json({ exitoso: true, mensaje: 'Ataque exitoso' })
    // } else {
    //   return response.json({ exitoso: false, mensaje: 'No hay un barco en las coordenadas especificadas' })
    // }.

    if (mar.mar[letraConvertidaNumero][numero] === 'X') {
      return response.json({ exitoso: true, mensaje: 'Ataque exitoso' })
    } else {
      return response.json({ exitoso: false, mensaje: 'No hay un barco en las coordenadas especificadas' })
    }

  }


}
