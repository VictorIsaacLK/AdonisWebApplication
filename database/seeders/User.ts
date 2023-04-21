import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/user/User';
import Hash from '@ioc:Adonis/Core/Hash'


export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        name: 'Isaac Hunter',
        email: 'isaacalmanzap@gmail.com',
        password: await Hash.make("hola"),
        phone: '0000000000',
        status: true,
        role_id: 1,
      },
      {
        name: 'Vincent Meansd',
        email: 'noreplay@gmail.com',
        password: await Hash.make("hola"),
        phone: '0000000000',
        status: true,
        role_id: 2,
      }
    ]);
  }
}
