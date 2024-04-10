
## Getting started

## Installation
-install node packages
    $ npm install 
-install nest
    npm i @nestjs/cli (For localy install)     [npm i -g @nestjs/cli] (For globally install)

create new project 
.\node_modules\.bin\nest new nestjs-assesment_krunal

Running the app
# development
$ npm run start

# watch mode
$ npm run start:dev

## Structure

here is some basic structure :
	MyProject
├── src                   // place of your TypeScript code
│   ├── entity            // place where your entities (database models) are stored
│   │   └── UserDetail.ts       // sample entity
├	│── dto            // place where your dto files  are stored
│   │   └── form.dto.ts        // sample dto
├	│── repository            // place wherre repository files  are stored
│   │   └── form.repository.ts        // sample repository files
├	│── services            // place where service file store 
│   │   └── form.services.ts        // sample service file
│   ├── migration         // place where your migrations are stored
│   ├── data-source.ts    // data source and all connection configuration
│   └── index.ts          // start point of your application
├── .gitignore            // standard gitignore file
├── package.json          // node module dependencies
├── README.md             // simple readme file
└── tsconfig.json         // TypeScript compiler options


## Configuration
Create a .env and .env.development files in the root diectory, add the following keys, and provide values of your choice to the keys without values:

DB_DIALECT
DB_HOST=
DB_PORT
DB_USERNAME
DB_PASSWORD
DB_NAME
DB_ALTER_TABLE
TEST_DB_NAME
APP_PORT
These keys will be used throughout the project for the database connection and DB_NAME is the name of the database that the project will use. The key APP_PORT is the port on which the API will run.

## Nest.js API

[post] http://localhost:3000/api/v1/form

this api use to set form which contains title and data will be stored in forms table

[post] http://localhost:3000/api/v1/form/fill-data?title=Form3

this api use use to fill all dyamic fields with their Values except title fields


[GET] http://localhost:3000/api/v1/form/show-data?title=Form3
 
 This api used to display form data based on title

