module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest', // Add this line to transform ES modules
  },
  testEnvironment: 'jsdom', // Ensure the test environment is set to jsdom
};
