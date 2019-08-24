/**
 * Suppress React 16.8 act() warnings globally.
 * Waiting for react-native to support react 16.9
 */
export const consoleError = console.error;
jest.spyOn(console, 'error').mockImplementation((...args) => {
  if (!args[0].includes('Warning: An update to %s inside a test was not wrapped in act')) {
    consoleError(...args);
  }
});
