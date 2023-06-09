# Mega Man Database App https://megamandb-api.onrender.com



(Scroll down for screenshots)

This is a readme file for the Mega Man Database App, which is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The app serves as a comprehensive database for Mega Man games and their bosses, providing information about each game and its associated bosses. To access the features of the app, users are required to create an account and log in.



Branch deployed: production


## Features

- User Registration and Login: Users can create an account by providing the necessary details and then log in to access the app's features.
- Game Information: The app displays detailed information about each Mega Man game, including its release date, developer, publisher, and platform.
- Boss Details: Users can explore information about various bosses from different Mega Man games, such as their names, abilities, weaknesses, and strategies.
- Interactive UI: The user interface is built using React.js and offers a seamless and intuitive experience.
- Toast Notifications: The app utilizes the "react-toastify" package to display informative and user-friendly toast notifications.

## Installation

To run the Mega Man Database App locally, please follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd mega-man-database-app`
3. Install the required dependencies:
   - For the client-side (React.js) dependencies:
     - Run `npm install` in the root directory.
   - For the server-side (Node.js) dependencies:
     - Navigate to the `server` directory: `cd server`
     - Run `npm install`.
4. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Define the following environment variables in the `.env` file:
     - `MONGO_URI`: The URI for your MongoDB database.
     - `JWT_SECRET`: A secret key for JSON Web Token (JWT) encryption.
5. Start the development server:
   - In the root directory, run `npm run dev` to start the client and server concurrently.
6. Open your browser and visit `http://localhost:3000` to access the Mega Man Database App.

## Dependencies

The Mega Man Database App utilizes the following dependencies:

### Client-Side Dependencies

- axios: ^1.3.4
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.10.0
- react-toastify: ^9.1.2
- tailwind-scrollbar: ^3.0.0

### Server-Side Dependencies

- bcrypt: ^5.1.0
- cors: ^2.8.5
- dotenv: ^16.0.3
- express: ^4.18.2
- jsonwebtoken: ^9.0.0
- mongoose: ^7.0.3
- nodemon: ^2.0.22
- validator: ^13.9.0


## Contributions

Contributions to the Mega Man Database App are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request to the repository. Let's make this app better together!

## Contact

If you have any questions or need further assistance, please feel free to reach out to the app's creator:

- Name: Cristian Di Grandi
- Email: write2cmdg@gmail.com

Thank you for using the Mega Man Database App!

## Screenshots
![Screenshot_20230516_183323_Chrome](https://github.com/write2cmdg/megaman-database/assets/116200147/12679e00-60a4-4a82-885b-71c6d998a77e)

![Screenshot_20230516_183645_Chrome](https://github.com/write2cmdg/megaman-database/assets/116200147/dbe7d7c2-3726-44e6-9441-a2361ba42a81)

![Screenshot_20230516_184350_Chrome](https://github.com/write2cmdg/megaman-database/assets/116200147/55aa3949-1bc2-4100-9116-cadfa11bfa1e)

![Screenshot_20230516_184411_Chrome](https://github.com/write2cmdg/megaman-database/assets/116200147/98ffa338-a58f-45da-895d-c3098635578e)

![Screenshot_20230516_183838_Chrome](https://github.com/write2cmdg/megaman-database/assets/116200147/1e765e2e-f561-4188-b2cb-36ef1d22ab88)

![Screenshot_20230516_183910_Chrome](https://github.com/write2cmdg/megaman-database/assets/116200147/b3783717-3fcc-477f-a760-1e85604a2256)

