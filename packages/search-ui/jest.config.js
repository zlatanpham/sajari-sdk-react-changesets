// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  rootDir: '../..',
  testMatch: ['<rootDir>/packages/search-ui/**/*.test.ts', '<rootDir>/packages/search-ui/**/*.test.tsx'],
  name: '@tpham0/react-search-ui',
  displayName: 'search-ui',
};
