import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'barcos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table.integer('user_id').unsigned().notNullable()
      // table.foreign('user_id').references('id').inTable('users')
      table.json('coordenadas').notNullable()
      table.boolean('atacado').defaultTo(false)
      table.boolean('hundido').defaultTo(false)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
