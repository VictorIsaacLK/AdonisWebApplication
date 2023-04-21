import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'ataques'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('partida_id').unsigned()
      table.foreign('partida_id').references('id').inTable('partidas')
      table.integer('atacante_id').unsigned()
      table.foreign('atacante_id').references('id').inTable('users')
      table.string('target_x')
      table.string('target_y')
      table.boolean('hubo_golpe')

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
