import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import User from './user/User';

export default class Barco extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public coordenadas: [number, number][]

  @column({columnName: 'atacado'})
  public haSidoAtacado: boolean

  @column({columnName: 'hundido'})
  public haSidoHundido: boolean

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
