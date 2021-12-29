module.exports = {
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'utils', // a utility folder
    __dirname, // the root directory
  ],
  // ... other options ...
  testEnvironment: 'jest-environment-jsdom',

  // work with png
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/utils/__mocks__/fileMocks.js',
    '\\.(css|less)$': '<rootDir>/utils/__mocks__/fileMocks.js',
  },
};