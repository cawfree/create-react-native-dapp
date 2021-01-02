export enum Web3Environment {
  NONE,
  TRUFFLE,
}

export enum CreationStatus {
  SUCCESS,
  FAILURE,
}

export type createContextPaths = {
  /* dirs */
  readonly projectDir: string;
  readonly scriptsDir: string;
  /* files */
  readonly index: string;
  readonly postinstall: string;
  readonly ganache: string;
  readonly pkg: string;
  readonly metroConfig: string;
  readonly babelConfig: string;
  readonly env: string;
  readonly app: string;
  readonly appJson: string;
  readonly contract: string;
  readonly typeRoots: string;
  readonly tsc: string;
  readonly gitignore: string;
};

export type createParams = {
  readonly name: string;
  readonly bundleIdentifier: string;
  readonly packageName: string;
};

export type createContextOptions = createParams & {
  readonly yarn: boolean;
};

export type createContext = {
  readonly paths: createContextPaths;
  readonly options: createContextOptions;
};

export type createResult = createContext & {
  readonly status: CreationStatus;
  readonly message: string;
};
