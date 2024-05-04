# Node.js TypeScript Express Boilerplate

Welcome to the Node.js TypeScript Express Boilerplate! This repository is designed to jumpstart your Node.js web development projects by providing a solid foundation with TypeScript and Express.

## Features

### Structured Folder Organization

The project comes with a well-defined folder structure to promote code organization and maintainability:

- `modules`: This directory houses individual modules of your application, each encapsulating related functionality. Within each module, you can manage different versions (`v1`, `v2`, etc.) and include dedicated folders for controllers, routes, and schemas using Joi validator.
- `helpers`: Contains utility functions and helpers that can be reused throughout your application.
- `interfaces`: TypeScript interfaces are located here, defining data structures and contracts used across different parts of the application.
- `models`: Database models and schemas are defined in this directory, facilitating seamless integration with the chosen database.
- `services`: Houses business logic and services responsible for executing various tasks within your application.

### Code Quality and Consistency

To maintain code quality and consistency, this boilerplate incorporates:

- **Husky with ESLint and Prettier**: Git pre-commit hooks are configured using Husky to ensure that all code adheres to defined ESLint rules and Prettier formatting standards. This helps in catching potential issues early and maintaining a clean codebase.

### Essential Libraries

The boilerplate includes a set of essential libraries and dependencies commonly required for building robust web applications:

- **Body-parser**: Middleware for parsing incoming request bodies in Express applications.
- **Joi validator**: Powerful schema description language and data validator for JavaScript.
- **Bcrypt**: Library for hashing passwords, enhancing security by encrypting sensitive user data.
- **Dotenv**: Module for loading environment variables from a `.env` file into `process.env`.
- **Mysql2**: MySQL client for Node.js, facilitating interaction with MySQL databases.
- **Multer**: Middleware for handling multipart/form-data, enabling file uploads.
- **Winston**: Versatile logging library for Node.js, offering flexibility and configurability for logging needs.
- **Tslib**: Library providing runtime library functions for TypeScript compilation output.
- **EJS**: Embedded JavaScript templating engine for generating HTML markup with plain JavaScript.
- **Moment**: Library for parsing, validating, manipulating, and formatting dates in JavaScript.
- **Sequelize ORM**: Promise-based ORM for Node.js, supporting multiple database dialects and offering powerful features for managing database interactions.
- **TypeScript**: Superset of JavaScript that adds optional static typing, improving code quality and developer productivity.
- **Nodemon**: Utility that monitors for changes in your source code and automatically restarts the server during development, facilitating a smooth development workflow.

## Getting Started

To start using this boilerplate for your projects, follow these steps:

1. Clone this repository: `git clone https://github.com/shivams1007/nodejs-typescript-express-boilerplate.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run start`
4. Build for production: `npm run build`

Feel free to explore and customize the boilerplate to suit your specific project requirements!

## Contributing

Contributions to this project are highly encouraged and welcomed! If you have any suggestions, bug fixes, or new features to add, please feel free to fork this repository and submit a pull request. Together, we can make this boilerplate even better!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
