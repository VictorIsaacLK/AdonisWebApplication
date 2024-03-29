/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
// import PartidasController from '../app/Controllers/Http/PartidasController';

Route.get('/', async () => {
  return { hello: 'world' }
})










































Route.post('/register', 'user/UsersController.create').as('createUser')
Route.get('/verify/:id', 'user/UsersController.verifyEmail').as('verifyEmail')
Route.post('/verify/:id', 'user/UsersController.verifyCode').as('verifyCode')


Route.post('/login', 'user/UsersController.login').as('login')

Route.group(()=> {
  Route.get('/logout', 'user/UsersController.logout').as('logout')
}).middleware(['auth:api'])


Route.post('/iniciarPartida', 'PartidasController.iniciarPartida').as('iniciarPartida')
Route.get('/traer-tablero', 'TableroJuegosController.generarTablero').as('tablero')
//Route.get('/traer-tablero/:id', 'TableroJuegosController.generarTablero').as('tablero')
Route.post('/ataque', 'PartidasController.emitirAtaque').as('ataque')

Route.post('/ataquePRUEBA', 'PartidasController.enviarAtaque').as('ataqueprueba')


Route.get('/events', 'SsesController.events').middleware('seeMid')

Route.get('/gameboard', 'PruebasController.index')
Route.post('/gameboard/attack', 'PruebasController.attack')

Route.post('/misil/:id', 'PartidasController.enviarAtaquePlus')
