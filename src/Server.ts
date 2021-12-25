import express from 'express';
import DefineEnvironment from '../config/environments/';

class Server {
  private _app: express.Application;
  constructor() {
    this._app = express();
    this.config();
  }

  getExpressApplication = (): express.Application => this._app;

  private config = (): void => {
    const defineEnvironment = new DefineEnvironment();
    const environmentPort = defineEnvironment.getCurrentEnvironment().getPort();
    this._app.set('port', environmentPort);
  };
  start = (): void => {
    this._app.listen(this._app.get('port'), () => {
      console.log(`
      *****\tAPI listening on port ${this._app.get('port')}\t        *****
      *****\trunning on ${process.env.NODE_ENV} environment\t*****
      `);
    });
  };
}

export default Server;
