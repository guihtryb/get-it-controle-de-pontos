import invalidEmail from "./emailValidation";

const invalidInputType = (input: string, type: string): boolean => typeof input !== type;

const invalidInputMinLength = (input: string, minLength: number)
: boolean => input.length < minLength;

const inputNotFilled = (input: string): boolean => !input;

const inputIsTooLong = (input: string, maxLength: number)
: boolean => input.length > maxLength;

export {
  invalidInputType,
  invalidInputMinLength,
  inputNotFilled,
  invalidEmail,
  inputIsTooLong,
};
