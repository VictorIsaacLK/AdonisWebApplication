import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Partida from './Partida';
import User from './user/User';

export default class Ataque extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public partidaId: number

  @belongsTo(() => Partida)
  public partida: BelongsTo<typeof Partida>

  @column()
  public atacanteId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public targetX: string

  @column()
  public targetY: string

  @column()
  public huboGolpe: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
