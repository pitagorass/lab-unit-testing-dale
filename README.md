# lab-unit-testing-dale Microservice

In this readme file, there is all the information related to the microservice type project that will help us to illustrate how jest works with nestjs

* Read this in other languages: [Spanish](README.esp.md).

# Table of Contents
  - [Requirements](#Requirements)
  - [Node Package Installation](#Node-package-installation)
  - [Environment Variables](#Environment-Variables)
  - [Run](#Run-the-microservice-in-local-environment)
  - [Running Tests](#Running-tests)
  - [Migrations](#Migrations)
  - [Run Docker](#Run-Docker)
  - [Project Structure](#Project-structure)
  - [Good practices](#Good-practices)

# <a name="Requirements">Requirements</a> 

Before starting the microservice, we recommend reading the official documentation.

[Node.js Documentation](https://nodejs.org/en/docs/ 'Node')

[NestJs Documentation](https://docs.nestjs.com/ 'Node')

[Jest Documentation](https://jestjs.io/docs/getting-started 'Node')


Remember to update the paths in the dev.env file

install [Node.js](https://nodejs.org/en/ 'Node') on version 16.17.0

# <a name="Node Package Installation">Node Package Installation</a>   

Before installing npm dependencies, follow these steps carefully.



- In your visual studio code terminal :computer: run the command `npm install` in the root of the project.

- To run the unit tests and generate a coverage you can run the command `npm run test:cov`


# <a name="Environment-Variables">Environment Variables</a>  

Your team can share these files with you but, if you're starting fresh, you will need to create them yourself:

- Create `dev.env` and `test.env` files in the root directory. Use the [dev.env.template](./dev.env.template) :link: and [test.env.template](./test.env.template) :link: for reference and add your secrets.

# <a name="Run-the-microservice-in-local-environment">Run Microservice</a>   

- run the following command to start the microservice :computer:

```shell
npm run start
```

- Run the following command if you want to run the microservice in developer mode :computer:

```shell
npm run start:dev
```

- You can access the documentation once the microservice is running through the following urls. [http://localhost:5011/docs]('http://localhost:5011/docs') :link:

# <a name="Running-tests">Running Tests</a> 

To run the tests, you can run any of the following commands :computer: :

```shell
npm run test
```

```shell
npm run test:cov
```

```shell
npm run test:watch
```

```shell
npm run test:debug
```

```shell
npm run test:e2e
```

# <a name="Migrations">Migrations</a> 

If the microservice has a database connection configured, the following commands must be executed, depending on your need.

- To apply the migrations to our database, run the following command :computer: :

```shell
npm run typeorm:migrate
```

- To perform some rollback of a database migration, run the following command :computer: :

```shell
npm run typeorm:revert
```

- To create a new migration, run the following command :computer: :

```shell
npm run typeorm:generate src/db/migration/name-migration
```
- Replace name-migration with the name you want to give the new migration.

# <a name="Run-Docker">Run Docker</a>

In progress

# <a name="Project-structure">Project Structure</a> 

```sh
transfer-validation-nestjs-ms/
├── src              # In this folder is the application code
      ├── config
      ├── constants
      ├── modules
      ├── shared
      ├── utils
      ├── main.ts
      ├── transfer-validation-service.module.ts
├── test
├── dev.env
├── package.json
```
# <a name="Good-practices">Good practices</a> 

Remember that all code you write in this microservice must be in English, including comments.

Do not forget that the description of the commit's must also be in English  and the message must be descriptive with the code that you are going to upload.
