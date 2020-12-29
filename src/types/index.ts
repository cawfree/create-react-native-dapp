export enum Web3Environment {
  NONE,
  TRUFFLE,
}

export enum CreationStatus {
  SUCCESS,
  FAILURE,
}

export type createContext = {
  readonly dir: string;
  readonly index: string;
  readonly scripts: string;
  readonly postinstall: string;
  readonly ganache: string;
  readonly pkg: string;
  readonly metroConfig: string;
  readonly app: string;
  readonly shouldUseYarn: boolean;
};

export type createParams = {
  readonly name: string;
};

export type createResult = createContext & {
  readonly status: CreationStatus;
  readonly message: string;
};
