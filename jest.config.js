module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: 'jsdom',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: false
      }
    }
  },
  // Setup Enzyme
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  modulePathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/dist/", "<rootDir>/src/utils", "<rootDir>/node_modules/"]
};