// Import necessary modules
import express from 'express' // Import Express.js framework
import { DB, Port } from './Config.js' // Import database URL and port from configuration file
import { DBconnect } from './DataBase/DB_connect.js' // Import database connection function
import Router from './DataBase/Crud.js' // Import CRUD router
import morgan from 'morgan' // Import Morgan for logging HTTP requests
import helmet from 'helmet' // Import Helmet for securing HTTP headers
import cors from 'cors' // Import CORS middleware
import router from './DataBase/Search.js' // Import search router

// Enable CORS for specific origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://notes-app-node-next.vercel.app',
]

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200, // For legacy browser support
}

const app = express() // Initialize an Express application

// Use CORS middleware with specified options
app.use(cors(corsOptions))

// Middleware to parse incoming JSON requests
app.use(express.json())

// Security middleware to set various HTTP headers
app.use(helmet())

// HTTP request logger middleware for logging requests in the 'dev' format
app.use(morgan('dev'))

// Use the CRUD router for handling requests to '/api/Notes'
app.use('/api/Notes', Router)

// Use the search router for handling requests to '/api/note'
app.use('/api/note', router)

// Start the server and listen on the specified port
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`)
})

// Output the database URL to the console for debugging purposes
console.log(`Database URL: ${DB}`)

// Connect to the database
DBconnect()
