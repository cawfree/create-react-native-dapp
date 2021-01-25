export enum BlockchainTools {
  NONE,
  TRUFFLE,
  HARDHAT,
}

export enum CreationStatus {
  SUCCESS,
  FAILURE,
}

export type createContextPaths = {
  /* dirs */
  readonly projectDir: string;
  readonly scriptsDir: string;
  readonly testsDir: string;
  readonly migrationsDir: string;
  /* files */
  readonly index: string;
  readonly postinstall: string;
  readonly pkg: string;
  readonly metroConfig: string;
  readonly babelConfig: string;
  readonly env: string;
  readonly exampleEnv: string;
  readonly app: string;
  readonly appJson: string;
  readonly typeRoots: string;
  readonly tsc: string;
  readonly test: string;
  readonly gitignore: string;
  readonly eslint: string;
  readonly cspell: string;
};

export type createParams = {
  readonly name: string;
  readonly bundleIdentifier: string;
  readonly packageName: string;
  readonly blockchainTools: BlockchainTools;
  readonly uriScheme: string;
};

export type TruffleOptions = {
  readonly contract: string;
  readonly ganache: string;
  readonly initialMigration: string;
};

export type HardhatAccount = {
  readonly privateKey: string;
  readonly balance: string;
};

export type HardhatOptions = {
  readonly hardhat: string;
  readonly hardhatConfig: string;
  readonly hardhatAccounts: readonly HardhatAccount[];
};

export type createContextOptions = createParams & {
  readonly yarn: boolean;
  readonly truffle: TruffleOptions | null;
  readonly hardhat: HardhatOptions | null;
};

export type createContext = {
  readonly paths: createContextPaths;
  readonly options: createContextOptions;
};

export type createResult = createContext & {
  readonly status: CreationStatus;
  readonly message: string;
};

export type EnvVariable = readonly [name: string, type: string, value: string];
export type EnvVariables = readonly EnvVariable[];
