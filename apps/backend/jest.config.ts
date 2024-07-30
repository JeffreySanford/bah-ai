module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@angular/core|@angular/common|@angular/platform-browser|@angular/platform-browser-dynamic|@angular/router|@angular/forms|@angular/animations|@angular/compiler|@angular/compiler-cli|rxjs)',
  ],
};
