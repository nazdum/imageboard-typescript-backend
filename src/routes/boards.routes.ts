import express from 'express';

class BoardRouter {
  private _router: express.Router;

  constructor() {
    this._router = express.Router();
    this.setHttpMethods();
  }

  getRouter = (): express.Router => this._router;

  private setHttpMethods = (): void => {
    this._router.get('/a', (req, res) => { res.json({ message: 'hola ruta' }) });
  }
}

export default BoardRouter;
