import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'partidas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_one').unsigned().notNullable()
      table.foreign('user_one').references('id').inTable('users')
      table.integer('user_two').unsigned().notNullable()
      table.foreign('user_two').references('id').inTable('users')
      table.integer('ganador_id ').unsigned().nullable()
      table.foreign('ganador_id').references('id').inTable('users')
      table.dateTime('empezo_a')
      table.dateTime('termino_a')
      table.integer('turno_id').unsigned()
      table.foreign('turno_id').references('id').inTable('users')
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
