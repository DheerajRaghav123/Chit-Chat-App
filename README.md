# Chit-Chat-App
Frontend (React):
The "components" directory contains reusable components used in the application, such as the ChatWindow component responsible for rendering the chat interface and the Message component for displaying individual chat messages.
The "pages" directory holds the different pages/views of the application. For example, the HomePage component represents the landing page of the chit chat application.
The App.js file serves as the entry point for the React application, managing the overall structure and routing.
Backend (Node.js):
The server.js file initializes the Node.js server, sets up middleware, and handles server configurations.
The "routes" directory contains the chatRoutes.js file, which defines the API endpoints and routes for handling chat-related requests.
The "controllers" directory contains the chatController.js file, which contains the logic for processing requests and generating responses.
The "models" directory includes the ChatMessage.js file, defining the data schema and structure for chat messages.
The "config" directory contains the database.js file, which handles the connection and configuration of the MongoDB database.
Database (MongoDB):
The "ChatMessages" collection stores chat messages sent between users.

