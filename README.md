# create-react-native-dapp

<p align="center">
  <img src="public/logo.png" width="100" />
</p>

![https://img.shields.io/badge/strictly-typescript-blue](https://img.shields.io/badge/types-typescript-blue)
![https://img.shields.io/badge/platforms-android%2Cios%2Cweb-brightgreen](https://img.shields.io/badge/platforms-android%2Cios%2Cweb-brightgreen)
![https://img.shields.io/badge/powered--by-ganache-orange](https://img.shields.io/badge/powered--by-ganache-orange)
[![https://img.shields.io/badge/chat-on%20discord-red](https://img.shields.io/badge/chat-on%20discord-red)](https://discord.gg/PeqrwpCDwc)

[`create-react-native-dapp`](https://github.com/cawfree/create-react-native-dapp) is an `npx` utility to help quickly bootstrap [**React Native ⚛️**](https://reactnative.dev) applications with access to the [**Ethereum**](https://ethereum.org) Blockchain.

Our goal is to help create a sustainable open source ecosystem for [`Web3`](https://github.com/ethereum/web3.js/) in React Native by providing a dependable common runtime which we can _buidl_ upon and extend **together**.

### 🔥 Features

- 🚀 **Bootstrapped by Expo.**
  - Easily take advantage of Expo's high quality, well-supported and well-documented library architecture.
  - Supports Android, iOS and the Web.
- 🍫 **Served with Hardhat or Ganache.**
  - Your generated app comes with a simple example contract which you can deploy and interact with directly.
  - You can also opt out of either framework to use a bare-bones [Infura](https://infura.io) example.
- 🏗️ **It's strictly typed.**
  - It comes pre-configured with TypeScript to help write applications that _scale_.
- 😉 **And it's ready to go.**
  - Built applications come pre-packaged with `.env` support using [`react-native-dotenv`](https://github.com/goatandsheep/react-native-dotenv) and companion tests for your [contracts](https://ethereum.org/en/learn/).

## To get started,
First you'll need to create an account on [**Expo**](https://expo.io/signup) and install the [`expo-cli`](https://docs.expo.io/workflow/expo-cli/) and sign in with your credentials. This is because we rely upon `expo eject` when building your app, which currently [requires you to be signed in](https://forums.expo.io/t/newly-created-app-crashes-on-ios-sim/45566).

```bash
npm i -g expo-cli
expo login
```

Next, check to make sure you're using a version of Node.js that's `>=12.0.0`:

```
nvm use 12
```

Okay, we're ready to go!

```
npx create-react-native-dapp
```

This will walk you through the creation of your Ethereum-enabled application, which works on [**Android**](https://reactnative.dev), [**iOS**](https://reactnative.dev) and the [**Web**](https://github.com/necolas/react-native-web). The resulting project has been `eject`ed from [**Expo**](https://expo.io) and merged with your selected blockchain development tools.

To start the app, you can:

```
cd my-react-dapp
yarn ios # android, web
```

> ⚠️ **Note:** If you've initialized your project with `Truffle Suite` or `Hardhat`, you'll need to run `yarn ganache` or `yarn hardhat` to simulate the local blockchain prior to running your app.

## To programmatically invoke,

[`create-react-native-dapp`](https://github.com/cawfree/create-react-native-dapp) also exports a simple interface for the programmatic allocation of new projects.

```ts
import { create, BlockchainTools } from 'create-react-native-dapp';

(async () => {
  const name = 'my-react-dapp';
  const bundleIdentifier = 'io.github.cawfree.dapp';
  const blockchainTools = BlockchainTools.HARDHAT;
  const { dir } = await create({
    name,
    bundleIdentifer,
    packageName: bundleIdentifier,
    blockchainTools,
  });
})();
```

## ✌️ License

[**MIT**](./LICENSE)
