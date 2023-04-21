import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './user/User'

export default class Partida extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'user_one' })
  public userOne: number

  @belongsTo(() => User, { foreignKey: 'userOne' })
  public userOneInfo: BelongsTo<typeof User>

  @column({ columnName: 'user_two' })
  public userTwo: number

  @belongsTo(() => User, { foreignKey: 'userTwo' })
  public userTwoInfo: BelongsTo<typeof User>

  @column({ columnName: 'ganador_id' })
  public ganadorId: number | null

  @belongsTo(() => User, { foreignKey: 'ganadorId', serializeAs: 'ganador' })
  public ganadorInfo: BelongsTo<typeof User>

  @column.dateTime({ columnName: 'empezo_a' })
  public empezoA: DateTime

  @column.dateTime({ columnName: 'termino_a' })
  public terminoA: DateTime

  @column({columnName: 'turno_id'})
  public turno_id: number

  @belongsTo(() => User, {
    foreignKey: 'turno_id',
  })
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
