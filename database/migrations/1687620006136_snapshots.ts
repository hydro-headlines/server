import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Snapshots extends BaseSchema {
  protected tableName = 'snapshots'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('date').notNullable()
      table.string('snap_url').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
