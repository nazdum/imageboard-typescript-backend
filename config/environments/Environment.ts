class Environment {
  private _port: number;
  private _dbConfig: {
    username: string;
    password: string;
    dbName: string;
  };

  constructor(
    port: number,
    dbConfig: { username: string; password: string; dbName: string }
  ) {
    this._port = port;
    this._dbConfig = dbConfig;
  }

  getPort = (): number => this._port;
  getDbConfig = (): { username: string; password: string; dbName: string } =>
    this._dbConfig;
}

export default Environment;
