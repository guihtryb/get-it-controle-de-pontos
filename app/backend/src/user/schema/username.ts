import { inputIsTooLong, inputNotFilled, invalidInputMinLength, invalidInputType } from "../../validations";
import { SchemaResponse } from "../../interfaces";
import { StatusCode, ErrorMessage } from "../../enums";

const usernameSchema = (username = ''): SchemaResponse[] => [
  {
    invalid: inputNotFilled(username),
    code: StatusCode.BAD_REQUEST,
    message: ErrorMessage.BAD_REQUEST,
  },
  {
    invalid: invalidInputMinLength(username, 3),
    code: StatusCode.UNAUTHORIZED,
    message: ErrorMessage.UNAUTHORIZED,
  },
  {
    invalid: invalidInputType(username, 'string'),
    code: StatusCode.UNAUTHORIZED,
    message: ErrorMessage.UNAUTHORIZED,
  },
  {
    invalid: inputIsTooLong(username, 15),
    code: StatusCode.BAD_REQUEST,
    message: ErrorMessage.BAD_REQUEST,
  },
];

export default usernameSchema;
