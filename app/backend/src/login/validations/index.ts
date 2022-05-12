import invalidEmail from './email';

const invalidInputType = (input: string, type: string): boolean => typeof input !== type;

const invalidInputMinLength = (input: string, minLength: number)
: boolean => input.length < minLength;

const inputNotFilled = (input: string): boolean => !input;

export {
  invalidInputType,
  invalidInputMinLength,
  inputNotFilled,
  invalidEmail,
};
