import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  
  transformIgnorePatterns: [
    "/node_modules/(?!(@react-native|react-native)/).*/"
  ],
  // setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  // setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  // setupFilesAfterEnv:  ['<rootDir>/node_modules/@testing-library/jest-native/extend-expect']
  
}

export default config