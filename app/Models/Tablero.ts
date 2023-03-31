import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Partida from './Partida';

export default class Tablero extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public partida_id: number

  @belongsTo(() => Partida)
  public partida: BelongsTo<typeof Partida>

  @column()
  public mar: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
