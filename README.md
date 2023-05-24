# Employee CRUD API

This is a Node.js API built with Express.js and Sequelize(MySQL ORM), providing CRUD operations for managing employees.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Sequelize Migrations](#sequelize-migrations)
- [API Endpoints](#api-endpoints)

## Prerequisites

To run this API, you need to have the following installed on your machine:

- Node.js (v12 or higher)
- MySQL database

## Installation

1. Clone the repository:

   ```shell
   git clone (https://github.com/surazkarn/employeeCrud)
   
   
2. Install the dependenciess:
   ```shell
   cd employeeCrud
   npm install 
   
## Configuration

1. Create a `.env` file in the project root directory.
 
2. Configure the environment variables in the `.env` file:

   ```shell
   DB_HOST=localhost
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_DATABASE=employee_db

## Database Setup

- Create a new database in MySQL named `employee_db`.

## Sequelize Migrations
Sequelize migrations are used to manage database schema changes. Follow these steps to create the necessary tables using migrations:

1. Initialize Sequelize migrations:
   ```shell
   npx sequelize-cli init
  This will create a migrations directory in your project.
 
2. Create a migration file for creating the employees table:
   ```shell
   npx sequelize-cli migration:generate --name create-employees-table
  This will generate a new migration file in the `migrations` directory.
  
3. Open the generated migration file (located in the migrations directory) and add the necessary code to define the employees table schema. For example:

  ```javascript  
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employees');
  },
};
```  
4. Run the migrations to create the employees table:
   ```shell
   npx sequelize-cli db:migrate
  This will execute the migration files located in the migrations directory and create the employees table in the database.

5. Repeat steps 2-4 for creating the contacts table (if needed) and any other required tables.



## API Endpoints

The API exposes the following endpoints:

### Create Employee

- URL: POST /employees/create
- Request Body:
  ```json
  {
    "name": "John Doe",
    "contacts": [
      {
        "type": "email",
        "value": "john.doe@example.com"
      },
      {
        "type": "phone",
        "value": "1234567890"
      }
    ]
  }
- Response: 201 Created


### List Employee

- URL: GET /employees/list
- Query Parameters:
   - `page' (optional): Page number for pagination (default: 1)
   - `limit`(optional): Number of employees per page (default: 10)
   - Response: 200 OK
  ```json
  {
  "employees": [
    {
      "id": 1,
      "name": "John Doe",
      "contacts": [
        {
          "id": 1,
          "type": "email",
          "value": "john.doe@example.com"
        },
        {
          "id": 2,
          "type": "phone",
          "value": "1234567890"
        }
      ]
    },
    ...
  ]
  }

### Update Employee

- URL: POST /employees/update/:id
- Request Body:
  ```json
  {
  "name": "Updated Name"
  }

- Response: 200 OK

### Delete Employee

- URL: POST /employees/delete/:id
- Response: 200 OK

### Get Employee

- URL: POST /employees/get/:id
- Response: 200 OK
  ```json
   {
  "employee": {
    "id": 1,
    "name": "John Doe",
    "contacts": [
      {
        "id": 1,
        "type": "email",
        "value": "john.doe@example.com"
      },
      {
        "id": 2,
        "type": "phone",
        "value": "1234567890"
      }
    ]
  }
  }
  
## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, you can reach out to me:

- Name: Suraj Kumar Karn
- Email: surajkumarkarn10@gamil.com