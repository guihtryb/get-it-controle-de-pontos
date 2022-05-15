import { inputIsTooLong, inputNotFilled, invalidInputMinLength, invalidInputType } from "../../validations";
import { SchemaResponse } from "../../interfaces";
import { StatusCode, ErrorMessage } from "../../enums";

const fullNameSchema = (fullName = ''): SchemaResponse[] => [
  {
    invalid: inputNotFilled(fullName),
    code: StatusCode.BAD_REQUEST,
    message: ErrorMessage.BAD_REQUEST,
  },
  {
    invalid: invalidInputMinLength(fullName, 8),
    code: StatusCode.UNAUTHORIZED,
    message: ErrorMessage.UNAUTHORIZED,
  },
  {
    invalid: invalidInputType(fullName, 'string'),
    code: StatusCode.UNAUTHORIZED,
    message: ErrorMessage.UNAUTHORIZED,
  },
  {
    invalid: inputIsTooLong(fullName, 40),
    code: StatusCode.UNAUTHORIZED,
    message: ErrorMessage.UNAUTHORIZED,
  },
];

export default fullNameSchema;
