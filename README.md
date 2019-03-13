# Serverless graphql boilerplate

:wrench: with :heart:

This is project template for [apollo graphql server 2.0][1] with [AWS lambda][2] and [AWS API Gateway][3] with [serverless][4] framework. This template gives a quick way to start with your apollo graphql server with AWS services using serverless framework.

## Quick Usage

Please make sure you have following:
- node 8+
- java 8 (if you want to use dynamodb local)
- serverless (if you want to use `sls install`)

> If you do not prefer to install serverless globally, then just use `git clone`

```console
> sls install -u https://github.com/RishikeshDarandale/serverless-graphql-boilerplate -n myservice
OR
> git clone https://github.com/RishikeshDarandale/serverless-graphql-boilerplate myservice
> cd myservice
> npm install
> npx sls offline start --stage local
```

> Note: please update your service name in `serverless.yml`

## Apollo graphql server

This project template uses [apollo-server-lambda][5] to expose the graphql server as AWS lambda function. The graphql schema and resolvers are aranged in such fashion that each type and it's resolvers will be in the same file. This will allow better management of your schema and maintenability of it. Just add a new `[type].js` and `typeDef` and `resolvers` as in the sample file, they will automatically sticted in main schema.

## serverless configurations

Yes, this is needed in every project. This template maintains the configuration under `./config` directory. Configuration is kept for per `region` per `environment`.

## Serveless plugins

- serverless-offline

To emulate your lambda with API gateway, this template uses [serverless-offline][6] plugin.

- webpack

To optimize and bundle all dependencies for lambda deployment, this template uses [serverless-webpack][7] plugin.

- serverless-dynanodb-local

To emulate dynamodb service, this template uses [serverless-dynamodb-local][8] plugin

## Project Layout

```console
serverless-graphql-boilerplate
|-- CONTRIBUTING.md
|-- README.md
|-- config    // configuration related to project
|   `-- us-east-1
|       |-- development.yml
|       |-- local.yml
|       `-- production.yml
|-- functions // graphql function which will have apollo graphql server 2.0 entrypoint
|   `-- graphql.js
|-- package-lock.json
|-- package.json
|-- seed      // dynamodb table seed data
|   `-- example.json
|-- serverless.yml
|-- src
|   |-- aws-resources // other aws resources for this stack
|   |   |-- dynamodb-table.yml
|   |   `-- lambda-role.yml
|   |-- graphql      // graphql schema and resolvers
|   |   |-- schema.js
|   |   `-- type.js
|   |-- libs         // source code
|   |   `-- utils
|   |       `-- LogUtils.js
|   `-- tests        // unit / integration tests
`-- webpack.config.js
```

# Going forward

serverless world is unlimited, please feel free to update your project with other [plugins][10] as per your need.

I am still tempting to add [linting][13], [prettier][14], [commitlint][15] and [husky][16] to this project, but holding back as other project may have different needs. Please feel free to refer my other([website-deploy][11] or [apollo-dataSource-soap][12]) project for these configurations.

# Contributing

:star: Star me on GitHub — it helps!

:heart: contribution: Here is [contributing guide][9] in deatil.

For impatient here are quick steps:

- **Fork** the repository
- Create **Branch** in you local repository
- while(youFinish) { **Commit** }
- **Squash** related commits.
- **Write** unit test cases for your work.
- Check the **Build** on your local.
- Raise a **Pull Request** (aka PR)


[1]: https://www.apollographql.com/docs/apollo-server/
[2]: https://aws.amazon.com/lambda/
[3]: https://aws.amazon.com/api-gateway/
[4]: https://serverless.com/
[5]: https://www.apollographql.com/docs/apollo-server/servers/lambda.html
[6]: https://github.com/dherault/serverless-offline
[7]: https://github.com/serverless-heaven/serverless-webpack
[8]: https://www.npmjs.com/package/serverless-dynamodb-local
[9]: ./CONTRIBUTING.md
[10]: https://github.com/serverless/plugins
[11]: https://github.com/RishikeshDarandale/website-deploy
[12]: https://github.com/RishikeshDarandale/apollo-datasource-soap
[13]: https://github.com/google/eslint-config-google
[14]: https://github.com/prettier/prettier
[15]: https://github.com/conventional-changelog/commitlint
[16]: https://github.com/typicode/husky
