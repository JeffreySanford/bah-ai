import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/test'; // Replace with your MongoDB URI

async function checkMongoDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB is running.');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('MongoDB is not running. Please install and start MongoDB.');
    process.exit(1);
  }
}

checkMongoDB();