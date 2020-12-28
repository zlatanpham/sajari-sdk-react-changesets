// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  rootDir: '../..',
  testMatch: ['<rootDir>/packages/components/**/*.test.ts', '<rootDir>/packages/components/**/*.test.tsx'],
  name: '@tpham0/react-components',
  displayName: 'components',
};
