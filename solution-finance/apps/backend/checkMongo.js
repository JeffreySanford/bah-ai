const mongoose = require('mongoose');
const winston = require('winston');
const { from } = require('rxjs');
const { catchError, tap } = require('rxjs/operators');
const { exec } = require('child_process');

// Plan:
// 1. Check MongoDB Connection: Attempt to connect to MongoDB.
// 2. Check and Create Collection: If connected, check for the `finance` collection and create it if it doesn't exist.
// 3. Handle MongoDB Not Running: If MongoDB is not running, check if it is installed.
// 4. Start MongoDB Daemon: If MongoDB is installed, start the MongoDB daemon.
// 5. Install MongoDB: If MongoDB is not installed, install it using the current Node.js version.

// Steps:
// 1. Update the `checkMongoDB` function:
//    - Add logic to check for the `finance` collection and create it if it doesn't exist.
//    - Add logic to check if MongoDB is installed and start the daemon if it is.
//    - Add logic to install MongoDB if it is not installed.

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
    tap(async () => {
      logger.info('MongoDB is running.');

      const db = mongoose.connection.db;
      const collections = await db.listCollections({ name: 'finance' }).toArray();
      if (collections.length === 0) {
        await db.createCollection('finance');
        logger.info('Finance collection created.');
      } else {
        logger.info('Finance collection already exists.');
      }

      mongoose.connection.close();
      logger.info('MongoDB connection closed.');
      process.exit(0);
    }),
    catchError((error) => {
      logger.error('MongoDB is not running. Checking if MongoDB is installed...');
      checkMongoInstallation();
      return [];
    })
  ).subscribe();
}

function checkMongoInstallation() {
  exec('mongo --version', (error, stdout, stderr) => {
    if (error) {
      logger.error('MongoDB is not installed. Installing MongoDB...');
      installMongoDB();
    } else {
      logger.info('MongoDB is installed. Starting MongoDB daemon...');
      startMongoDaemon();
    }
  });
}

function startMongoDaemon() {
  exec('mongod --dbpath /data/db', (error, stdout, stderr) => {
    if (error) {
      logger.error('Failed to start MongoDB daemon:', stderr);
      process.exit(1);
    } else {
      logger.info('MongoDB daemon started.');
      checkMongoDB();
    }
  });
}

function installMongoDB() {
  exec('npm install -g mongodb', (error, stdout, stderr) => {
    if (error) {
      logger.error('Failed to install MongoDB:', stderr);
      process.exit(1);
    } else {
      logger.info('MongoDB installed successfully. Starting MongoDB daemon...');
      startMongoDaemon();
    }
  });
}

checkMongoDB();