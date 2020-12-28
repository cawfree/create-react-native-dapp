import { execSync } from 'child_process';
import * as prompts from 'prompts';
import * as chalk from 'chalk';
import * as path from 'path';
import * as fs from 'fs';

const defaultPadding = 5;

const line = (message: string, padding: number = defaultPadding) =>
  console.log([...Array(padding)].map(() => ' ').join(''), message);

(async () => {
  console.clear();
  line(chalk.green.bold`Ξ Welcome to create-react-native-dapp! Ξ`);
  line('Your next Ethereum application starts here.', defaultPadding - 1);

  console.log();

  const { name } = await prompts({
    type: 'text',
    name: 'name',
    message: 'What is your app named?',
    initial: 'my-react-dapp',
  });

  console.log();

  execSync(`npx create-react-native-app ${name} -t with-typescript`, {
    stdio: 'inherit',
  });

  // TODO: Set app icon here prior to eject.

  const dir = path.resolve(name);

  execSync(`cd ${dir}; expo eject;`, { stdio: 'inherit' });

  const index = path.resolve(dir, 'index.js');

  const android = path.resolve(dir, 'index.android.js');
  const ios = path.resolve(dir, 'index.ios.js');
  const web = path.resolve(dir, 'index.web.js');

  // entry points
  fs.copyFileSync(index, android);
  fs.copyFileSync(index, ios);
  fs.copyFileSync(index, web);
  fs.unlinkSync(index);

  //line(
  //  `${chalk.white`Please help support this project by making a donation to `} ${chalk
  //    .green.bold`cawfree.eth Ξ 0x312e71162Df834A87a2684d30562b94816b0f072`}.`
  //);
})();
