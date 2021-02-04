# create-react-native-dapp

<p align="center">
  <img src="public/logo.png" width="100" />
</p>

![https://img.shields.io/badge/strictly-typescript-blue](https://img.shields.io/badge/types-typescript-blue)
![https://img.shields.io/badge/platforms-android%2Cios%2Cweb-brightgreen](https://img.shields.io/badge/platforms-android%2Cios%2Cweb-brightgreen)
![https://img.shields.io/badge/powered--by-hardhat-orange](https://img.shields.io/badge/powered--by-hardhat-orange)
[![https://img.shields.io/badge/chat-on%20discord-red](https://img.shields.io/badge/chat-on%20discord-red)](https://discord.gg/PeqrwpCDwc)

[`create-react-native-dapp`](https://github.com/cawfree/create-react-native-dapp) is an `npx` utility to help quickly bootstrap [**React Native ⚛️**](https://reactnative.dev) applications with access to the [**Ethereum**](https://ethereum.org) Blockchain.

Our goal is to help create a sustainable open source ecosystem for [`Web3`](https://github.com/ethereum/web3.js/) in React Native by providing a dependable common runtime which we can _buidl_ upon and extend **together**.

### 🔥 Features

- 🚀 **Bootstrapped by Expo.**
  - Easily take advantage of Expo's high quality, well-supported and well-documented library architecture.
  - Supports Android, iOS and the Web.
- 👷 **Served with Hardhat.**
  - Your generated app comes with a simple example contract which you can deploy, test and interact with directly.
- 👛 **Powered by WalletConnect**.
  - Connect to awesome Wallets such as [**Rainbow**](https://github.com/rainbow-me/rainbow) out of the box!
- 🏗️ **It's typed, and pretty.**
  - It comes pre-configured with TypeScript to help write applications that _scale_.
  - It's integrated with [**prettier**](https://prettier.io/) and [**husky**](https://github.com/typicode/husky) to ensure coding standards are enforced right from the beginning.
- 😉 **And it's ready to go.**
  - Built applications come pre-packaged with `.env` support using [`react-native-dotenv`](https://github.com/goatandsheep/react-native-dotenv) and companion tests for your [contracts](https://ethereum.org/en/learn/).
  - Projects are initialized using deep linking so external navigation is a breeze.

## To get started,

First, [please make sure](https://forums.expo.io/t/newly-created-app-crashes-on-ios-sim/45566) you've logged into [`expo-cli`](https://docs.expo.io/workflow/expo-cli/).

```
npx create-react-native-dapp
```

This will walk you through the creation of your Ethereum-enabled application, which works on [**Android**](https://reactnative.dev), [**iOS**](https://reactnative.dev) and the [**Web**](https://github.com/necolas/react-native-web).

To start the app, you can:

```
cd my-react-dapp
yarn ios # android, web
```

> ⚠️ **Note:** You'll need to execute `yarn hardhat` to simulate the local blockchain prior to running your app.

## To programmatically invoke,

[`create-react-native-dapp`](https://github.com/cawfree/create-react-native-dapp) also exports a simple interface for the programmatic allocation of new projects.

```ts
import { create } from 'create-react-native-dapp';

(async () => {
  const name = 'my-react-dapp';
  const bundleIdentifier = 'io.github.cawfree.dapp';
  const uriScheme = 'myapp'; // navigate using myapp://some/path
  const { dir } = await create({
    name,
    bundleIdentifer,
    packageName: bundleIdentifier,
    uriScheme,
  });
})();
```

## ✌️ License

[**MIT**](./LICENSE)
