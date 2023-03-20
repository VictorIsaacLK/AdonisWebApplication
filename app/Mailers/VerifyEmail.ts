import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import User from 'App/Models/user/User'
import View from '@ioc:Adonis/Core/View';

export default class VerifyEmail extends BaseMailer
{
  constructor (private user: User, private url)
  {
    super()
  }

  public async prepare(message: MessageContract)
  {
    message
    .from('noreply@huadmin.com')
    .to(this.user.email)
    .subject('Welcome!')
    .html(await View.render('user/bienvenida', {user:this.user, url:this.url}))
  }

}
