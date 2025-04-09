// jest.config.ts

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx|mjs|cjs)$': 'babel-jest', // Use babel-jest for JS files
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust this if you're using path aliases
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  transformIgnorePatterns: [
    "/node_modules/(?!your-vite-dependencies|other-modules-to-transform)/",
  ],
};

export default config;
