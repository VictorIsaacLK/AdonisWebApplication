// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Event from '@ioc:Adonis/Core/Event'
import Tablero from '../../Models/Tablero';

export default class TableroJuegosController
{
  public async generarTablero({params, response}: HttpContextContract)
  {
    const mar: string[][] = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => 'O'))

    function posicionRandom(): [number, number] {
      const row = Math.floor(Math.random() * 8)
      const col = Math.floor(Math.random() * 8)
      return [row, col]
    }

    let barcosUsadosX = 0
    let barcosUsadosY = 0

    while (barcosUsadosX < 15 && barcosUsadosY < 15) {
      const [row, col] = posicionRandom()
      if (mar[row][col] === 'O') {
        if (barcosUsadosX < 15) {
          mar[row][col] = 'X'
          barcosUsadosX++
        } else {
          mar[row][col] = 'Y'
          barcosUsadosY++
        }
      }
    }

    if (barcosUsadosX < 15) {
      while (barcosUsadosX < 15) {
        const [row, col] = posicionRandom()
        if (mar[row][col] === 'O') {
          mar[row][col] = 'X'
          barcosUsadosX++
        }
      }
    }

    if (barcosUsadosY < 15) {
      while (barcosUsadosY < 15) {
        const [row, col] = posicionRandom()
        if (mar[row][col] === 'O') {
          mar[row][col] = 'Y'
          barcosUsadosY++
        }
      }
    }

    const tablero = new Tablero()
    tablero.partida_id = params.id
    tablero.mar = JSON.stringify(mar)
    await tablero.save()

    return response.json({ mar })

  }

}
