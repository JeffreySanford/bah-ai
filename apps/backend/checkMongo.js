const mongoose = require('mongoose');
const winston = require('winston');
const { from } = require('rxjs');
const { catchError, tap } = require('rxjs/operators');

// Configure the logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console()
  ]
});

const mongoURI = 'mongodb://localhost:27017/finance'; // MongoDB URI
// Add logger running message
logger.info('Running script to check MongoDB connection...');

function checkMongoDB() {
  logger.info('This script is for demonstration and development purposes. Ensure MongoDB is installed locally.');

  from(mongoose.connect(mongoURI)).pipe(
    tap(() => {
      logger.info('MongoDB is running.');
      mongoose.connection.close();
      logger.info('MongoDB connection closed.');
      process.exit(0);
    }),
    catchError((error) => {
      logger.error('MongoDB is not running. Please install and start MongoDB.');
      process.exit(1);
      return [];
    })
  ).subscribe();
}

checkMongoDB();