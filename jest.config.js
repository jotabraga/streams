/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",  
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }    
  }, 
  testEnvironment: "node",
};
