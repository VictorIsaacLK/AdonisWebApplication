import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Partida extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'user_one' })
  public user_one: number

  @column({ columnName: 'user_two' })
  public user_two: number

  @column({ columnName: 'cantidad_turnos' })
  public cantidadTurnos: number | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
