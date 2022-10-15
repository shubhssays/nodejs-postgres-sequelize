1. npm install dotenv
2. npm install -g sequelize-cli
3. we will create a .sequelizerc file in our project’s root folder and below code
    
const path = require("path");

module.exports = {
  'config': path.resolve("src", "config","database","dbConnect.js"),
  'migrations-path': path.resolve("src", "config", "migrations"),
  'models-path': path.resolve("src", "config", "models"),
  'seeders-path': path.resolve("src", "config", "seeders"),
};


4. npm install — save sequelize pg pg-hstore
5. sequelize init
6. replace content of dbConnect.js as below


require("dotenv").config();
const dbConnect = {
  development: {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: process.env.PRODUCTION_DB_USER,
    password: process.env.PRODUCTION_DB_PASSWORD,
    database: process.env.PRODUCTION_DB_NAME,
    host: process.env.PRODUCTION_DB_HOST,
    dialect: "postgres",
  },
};

module.exports = dbConnect;


7. add below in .env file

PORT=3000

NODE_ENV=development
DEV_DB_HOST=localhost
DEV_DB_PORT=5432
DEV_DB_NAME=seq_test
DEV_DB_USER=postgres
DEV_DB_PASSWORD=shubhs


# NODE_ENV=test
# TEST_DB_HOST=localhost
# TEST_DB_PORT=5432
# TEST_DB_NAME=seq_test
# TEST_DB_USER=postgres
# TEST_DB_PASSWORD=shubhs


# NODE_ENV=production
# PRODUCTION_DB_HOST=localhost
# PRODUCTION_DB_PORT=5432
# PRODUCTION_DB_NAME=seq_test
# PRODUCTION_DB_USER=postgres
# PRODUCTION_DB_PASSWORD=shubhs


8. Add below scripts to package.json

"migrate": "npx sequelize-cli db:migrate",
"create-migration": "npx sequelize-cli migration:create --name"

9. To create migration file

   npm run create-migration filename-without-space

10. To run migration

   npm run migrate