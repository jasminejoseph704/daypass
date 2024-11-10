# DayPass

DayPass is a web application designed to provide gym-related services, including image uploads to Firebase Storage, user authentication, and seamless interaction with the backend API.

## Features

- **User Authentication**: Login with JWT tokens to secure access.
- **Image Upload**: Upload images (e.g., gym-related images) to Firebase Storage.
- **Modern Frontend**: Built with React and styled with a sleek orange theme.

## Technology Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, Firebase Admin SDK
- **Database**: Firebase Firestore (for user data)
- **Authentication**: JWT (JSON Web Tokens)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (with npm)
- [Git](https://git-scm.com/)
- A Firebase project and credentials to use Firebase Storage (refer to `firebase.js` for configuration).

## Installation

### Clone the Repository

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/daypass.git
    cd daypass
    ```

### Backend Setup

2. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:

    ```env
    FIREBASE_CREDENTIALS_PATH=./path/to/your/firebase-credentials.json
    JWT_SECRET=your-secret-key
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

   The server will run at `http://localhost:5000`.

### Frontend Setup

5. Install frontend dependencies:

    ```bash
    cd client
    npm install
    ```

6. Create a `.env` file in the `client` directory with the following content:

    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

7. Start the frontend development server:

    ```bash
    npm start
    ```

   The frontend will run at `http://localhost:3000`.

## Usage

### Authentication

- Use the `/api/auth/login` endpoint to log in and receive a JWT token.
  
### Image Upload

- Upload gym-related images using the `/api/gym/upload` endpoint (using a `POST` request with `image` as the form field).

### Example Request (Postman)

1. **Login Request (POST)**:
    - URL: `http://localhost:5000/api/auth/login`
    - Body (JSON):
      ```json
      {
        "username": "user1",
        "password": "yourpassword"
      }
      ```

2. **Image Upload Request (POST)**:
    - URL: `http://localhost:5000/api/gym/upload`
    - Body (Form-data):
      - Key: `image` (file)
      - Value: Select an image file to upload.

## Contributing

1. Fork this repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Note:** Make sure to replace the placeholder `yourusername` in the GitHub clone URL and any other configuration specific to your environment (e.g., Firebase credentials, JWT secrets, etc.).
