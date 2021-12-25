import Environment from './Environment';

class Development extends Environment {
  constructor() {
    super(parseInt(process.env.PORT!), {
      username: 'pruebas',
      password: '123',
      dbName: 'development_imageboard',
    });
  }
}

export default Development;
