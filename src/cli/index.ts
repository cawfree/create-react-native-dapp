#!/usr/bin/env node

import chalk from 'chalk';
import prompts from 'prompts';

import { create } from '../builder';
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

  const { name } = await prompts({
    type: 'text',
    name: 'name',
    message: 'What is your app named?',
    initial: 'my-react-dapp',
  });

  const { message, status } = await create({ name });

  if (status === CreationStatus.FAILURE) {
    // eslint-disable-next-line functional/no-throw-statement
    throw new Error(message);
  }
})();
