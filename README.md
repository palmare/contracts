# Palmare Project

Palmare is a Community-first Web3 Sport App with inbuilt Game-Fi and Ride to Earn element

Palmare is built around an essential daily activity for most people – moving around. We are the first project to effectively bring to life a functioning ride & earn concept.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/PalToken.ts
TS_NODE_FILES=true npx ts-node scripts/PalToken.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# BSCScan verification

To try out BSCScan verification, you first need to deploy a contract to an BSC network that's supported by BSCScan.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your BSCScan API key and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network testnet scripts/PalToken.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --contract 0xEC143f87E8C2166F0405158677b84A10C045479a --network mainnet``
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

# Contracts
##Testnet

BSC Contract : 0xfB187073c490C3cb7E66f679dbDc13e64B401273

##Mainnet 

BSC Contract : 0xEC143f87E8C2166F0405158677b84A10C045479a
