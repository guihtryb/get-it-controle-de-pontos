import { StatusCode, ErrorMessage } from '../../enums';
import { SchemaResponse } from '../../interfaces/';

import {
  invalidInputMinLength,
  invalidInputType,
  inputNotFilled,
} from '../validations';

const passwordSchema = (password = ''): SchemaResponse[] => [
  {
    invalid: inputNotFilled(password),
    code: StatusCode.BAD_REQUEST,
    message: ErrorMessage.BAD_REQUEST,
  },
  {
    invalid: invalidInputType(password, 'string'),
    code: StatusCode.UNAUTHORIZED,
    message: ErrorMessage.UNAUTHORIZED,
  },
  {
    invalid: invalidInputMinLength(password, 7),
    code: StatusCode.UNAUTHORIZED,
    message: ErrorMessage.UNAUTHORIZED,
  },
];

export default passwordSchema;
