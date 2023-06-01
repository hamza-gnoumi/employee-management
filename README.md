# Employee Management Application

This is a simple CRUD (Create, Read, Update, Delete) application for managing employees. The application is built using the Spring Boot framework on the backend and Angular on the frontend.

## Features

- Add new employees with their details such as first name, last name, and email.
- View a list of all employees with their information.
- Update employee details.
- Delete employees from the system.

## Technologies Used

- Spring Boot version 3.1.0.
- Angular version 15.
- MySQL.

## Prerequisites

Before running the application, make sure you have the following installed:

- Java Development Kit (JDK)
- Node.js and npm
- MySQL

## Getting Started

Follow these steps to get the application up and running:

1. Clone the repository: `git clone https://github.com/your-username/employee-management.git`
2. Navigate to the project directory: `cd employee-management`
3. Set up the database.
4. Configure the database connection in the `application.properties` file.
5. Build and run the backend server: `./mvnw spring-boot:run`
6. Navigate to the frontend directory: `cd angularClient`
7. Install dependencies: `npm install`
8. Start the Angular development server: `ng serve`
9. Open your browser and access the application at `http://localhost:4200`.

## Folder Structure

The project follows a standard folder structure:
...

employee-management/
├── springclient/ # Spring Boot backend code
└── angularclient/ # Angular frontend code


---------


## API Endpoints

The following API endpoints are available:

- `GET /api/v1/employees`: Get a list of all employees.
- `POST /api/v1/employees`: Add a new employee.
- `GET /api/v1/employees/{id}`: Get details of a specific employee.
- `PUT /api/v1/employees/{id}`: Update details of a specific employee.
- `DELETE /api/v1/employees/{id}`: Delete a specific employee.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the GitHub repository.

