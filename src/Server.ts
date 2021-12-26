import express from 'express';
import DefineEnvironment from '../config/environments/';
import morgan from 'morgan';
import BoardRouter from './routes/boards.routes';

class Server {

  private _app: express.Application;

  constructor() {

    this._app = express();
    this.config();

  }

  getExpressApplication = (): express.Application => this._app;

  start = (): void => {

    this._app.listen(this._app.get('port'), () => {

      console.log(`
      *****\tAPI listening on port ${this._app.get('port')}\t        *****
      *****\trunning on ${process.env.NODE_ENV} environment\t*****
      `);

    });

  };

  private config = (): void => {

    const defineEnvironment = new DefineEnvironment();
    const environmentPort = defineEnvironment.getCurrentEnvironment().getPort();
    this._app.set('port', environmentPort);
    this.setMiddleWares();
    this.serverRouteManager();

  };

  private setMiddleWares = (): void => { this._app.use(morgan('dev')) };

  private serverRouteManager = (): void => {
    const br = new BoardRouter();
    this._app.use('/',br.getRouter())
  }
}

export default Server;
