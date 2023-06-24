import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Snapshot extends BaseModel {
  @column({ isPrimary: true })
  public date: string

  @column()
  public link: string
}
