import dotenv from 'dotenv';
dotenv.config();

import Environment from './Environment';
import Development from './Development';
import Production from './Production';

class DefineEnvironment {
  private _currentEnvironment: Development;

  constructor() {
    this._currentEnvironment = new Development();
    this.checkEnvironment();
  }

  private checkEnvironment = (): void => {
    if (process.env.NODE_ENV === 'production') {
      this._currentEnvironment = new Production();
    }
  };

  getCurrentEnvironment = (): Environment => this._currentEnvironment;
}

export default DefineEnvironment;
