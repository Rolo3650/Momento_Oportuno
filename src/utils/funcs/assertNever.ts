export const assertNever = (value: never): void => {
  console.warn(`Unhandled value: ${JSON.stringify(value)}`);
};
