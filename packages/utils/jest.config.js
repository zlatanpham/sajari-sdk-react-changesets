// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  rootDir: '../..',
  testMatch: ['<rootDir>/packages/utils/**/*.test.ts', '<rootDir>/packages/utils/**/*.test.tsx'],
  name: '@tpham0/react-sdk-utils',
  displayName: 'utils',
};
