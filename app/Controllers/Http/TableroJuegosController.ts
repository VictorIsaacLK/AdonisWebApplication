// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TableroJuegosController
{
  public async generarTablero({response}: HttpContextContract)
  {
    const mar: string[][] = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => 'O'))


    function posicionRandom(): [number, number] {
      const row = Math.floor(Math.random() * 8)
      const col = Math.floor(Math.random() * 8)
      return [row, col]
    }

    let barcosUsados = 0
    while (barcosUsados < 30) {
      const [row, col] = posicionRandom()
      if (mar[row][col] === 'O') {
        mar[row][col] = 'X'
        barcosUsados++
      }
    }

    return response.json({ mar })

  }
}
