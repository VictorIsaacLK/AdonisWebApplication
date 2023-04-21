import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PruebasController
{
  private grid: number[][]

  constructor() {
    this.grid = this.generateGrid()
    this.placeShips()
  }

  private generateGrid(): number[][] {
    const size = 8
    const grid: number[][] = []

    for (let i = 0; i < size; i++) {
      const row: number[] = []
      for (let j = 0; j < size; j++) {
        row.push(0)
      }
      grid.push(row)
    }

    return grid
  }

  private placeShips(): void {
    const shipCount = 30
    let placedShips = 0

    while (placedShips < shipCount) {
      const x = Math.floor(Math.random() * 8)
      const y = Math.floor(Math.random() * 8)

      if (this.grid[x][y] === 0) {
        this.grid[x][y] = 1
        placedShips++
      }
    }
  }

  public async index({ response }: HttpContextContract) {
    response.json(this.grid)
  }

  public async attack({ request, response }: HttpContextContract) {
    const { x, y } = request.only(['x', 'y'])
    const hit = this.grid[x][y] === 1
    this.grid[x][y] = hit ? 2 : 3 // 2 indica un golpe exitoso, 3 indica un fallo
    response.json({ hit })
  }
}
