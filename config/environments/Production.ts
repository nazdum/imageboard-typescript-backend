import Environment from './Environment';

class Production extends Environment {
  constructor() {
    super(parseInt(process.env.PORT!), {
      username: 'production',
      password: 'ocarina123',
      dbName: 'imageboard',
    });
  }
}

export default Production;
