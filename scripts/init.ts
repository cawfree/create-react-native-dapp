import { execSync } from 'child_process';
import * as prompts from 'prompts';
import * as chalk from 'chalk';
import * as path from 'path';

const defaultPadding = 3;

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
    // TODO: Should validate
    //validate: value => value < 18 ? `Nightclub is 18+ only` : true
  });

  console.log();

  execSync(`npx create-react-native-app ${name} -t with-typescript`, {
    stdio: 'inherit',
  });
  // TODO: Set app icon here.
  line(
    `${chalk.white`Please support this project by making a donation to`} ${chalk
      .green.bold`0x312e71162Df834A87a2684d30562b94816b0f072`}.`
  );

  const dir = path.resolve(name);

  execSync(`cd ${dir}; expo eject;`, { stdio: 'inherit' });
})();
