export enum CreationStatus {
  SUCCESS,
  FAILURE,
}

export type createParams = {
  readonly name: string;
  //readonly bundleIdentifier: string;
  //readonly packageName: string;
  readonly uriScheme: string;
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
  readonly hardhat: HardhatOptions;
};

export type createContext = createContextOptions & {
  readonly projectDir: string;
  readonly scriptsDir: string;
  readonly srcDir: string;
  readonly testsDir: string;
};

export type createResult = createContext & {
  readonly status: CreationStatus;
  readonly message: string;
};

export type EnvVariable = readonly [name: string, type: string, value: string];
export type EnvVariables = readonly EnvVariable[];
