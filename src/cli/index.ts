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

//function validateBundleId(value: string): boolean {
//  return /^[a-zA-Z][a-zA-Z0-9\-.]+$/.test(value);
//}
//
//function validatePackage(value: string): boolean {
//  return /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)+$/.test(value);
//}

function validateUriScheme(value: string): boolean {
  return /^[a-z0-9]+$/.test(value);
}

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

  const {
    name,
    //bundleIdentifier,
    //packageName,
    uriScheme,
  } = await prompts([
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
    //{
    //  type: 'text',
    //  name: 'bundleIdentifier',
    //  message: 'What is the iOS bundle identifier?',
    //  initial: 'com.myreactdapp',
    //  validate: (value) => {
    //    if (!validateBundleId(value)) {
    //      return `Only alphanumeric characters, '.', '-', and '_' are allowed, and each '.' must be followed by a letter.`;
    //    }
    //    return true;
    //  },
    //},
    //{
    //  type: 'text',
    //  name: 'packageName',
    //  message: 'What is the Android package name?',
    //  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  // @ts-ignore
    //  initial: (last) => {
    //    if (!validatePackage(last)) {
    //      return undefined;
    //    }
    //    return last;
    //  },
    //  validate: (value) => {
    //    if (!validatePackage(value)) {
    //      return `Only alphanumeric characters, '.' and '_' are allowed, and each '.' must be followed by a letter.`;
    //    }
    //    return true;
    //  },
    //},
    {
      type: 'text',
      name: 'uriScheme',
      message: 'What is the URI scheme?',
      initial: 'myreactdapp',
      validate: (value) => {
        if (!validateUriScheme(value)) {
          return `Only lowercase alphanumeric characters are allowed.`;
        }
        return true;
      },
    },
  ]);

  const { status, message } = await create({
    name,
    //bundleIdentifier,
    //packageName,
    uriScheme,
  });

  if (status === CreationStatus.FAILURE) {
    // eslint-disable-next-line functional/no-throw-statement
    throw new Error(message);
  }
  console.log(message);
  console.log();
})();
