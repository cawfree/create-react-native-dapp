#!/usr/bin/env node

import chalk from 'chalk';
import prompts from 'prompts';

import { create } from '../buidler';
import { CreationStatus } from '../types';

const defaultPadding = 5;

const line = (message: string, padding: number = defaultPadding) =>
  console.log([...Array(padding)].map(() => ' ').join(''), message);

const gfx = `
MMMMMMMMMMMMMMMMMMMMMMMXkkKMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMWKd;':OWMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMW0dl;..,kNMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMNOdol;...,dNMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMXkdool,....'lXMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMWXxoc:;,.......c0WMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMKl;,'....     ..:0MMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMKxl:'....    .,:oKMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMWXOkxoc,...;cclo0WMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMWXkdxkxoclc;,lKWMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMN0doo:'..;xNMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMWKko;.'c0WMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMNOl:dXMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMWXXNMMMMMMMMMMMMMMMMMMMMMMM
`.trim();

(async () => {
  console.clear();
  console.log();
  gfx.split('\n').map((e) => line(e, 1));
  console.log();

  line(chalk.green.bold`Ξ Welcome to create-react-native-dapp! Ξ`);
  line(
    `Your next Ethereum application starts ${chalk.bold`here`}.`,
    defaultPadding - 1
  );

  console.log();

  const { name } = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'What is your app named?',
      initial: 'my-react-dapp',
      validate: (value) => {
        if (typeof value !== 'string') {
          return `Expected string, encountered ${typeof value}.`;
        } else if (!value.length) {
          return 'Name cannot be empty.';
        } else if (!value.match(/^[a-z0-9-]+$/i)) {
          return 'Name must be alphanumeric and contain no special characters other than a hyphen.';
        } else if (/^\d/.test(value)) {
          return 'Name cannot begin with a number.';
        } else if (/^-/.test(value)) {
          return 'Name cannot begin with a hyphen.';
        }
        return true;
      },
    },
  ]);

  const { message, status, shouldUseYarn } = await create({ name });

  if (status === CreationStatus.FAILURE) {
    // eslint-disable-next-line functional/no-throw-statement
    throw new Error(message);
  }

  const cmd = (str: string) =>
    chalk.white.bold`${shouldUseYarn ? 'yarn' : 'npm run-script'} ${str}`;

  console.log();
  console.log(
    chalk.green`✔`,
    'Successfully integrated Web3 into React Native!'
  );
  console.log();
  console.log(
    'To compile and run your project in development, execute one of the following commands:'
  );
  console.log('-', cmd('ios'));
  console.log('-', cmd('android'));
  console.log('-', cmd('web'));
  console.log();
  console.log('You can also simulate the blockchain by executing:');
  console.log('-', cmd('ganache'));
  console.log('To recompile your contracts, use:');
  console.log('-', chalk.white.bold`npx truffle compile`);

  console.log();
})();
