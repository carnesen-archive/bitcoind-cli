import { branch, cli } from '@carnesen/cli';
import { spawn } from './spawn';

export const root = branch({
  commandName: 'bitcoind',
  description:
    'A command-line interface for managing the bitcoin server process `bitcoind`',
  subcommands: [spawn],
});

if (module === require.main) {
  cli(root)();
}
