import { StatusCode, ErrorMessage } from '../../enums';
import { SchemaResponse } from '../../interfaces';
import { invalidEmail, inputNotFilled } from '../validations';

const emailSchema = (email = ''): SchemaResponse[] => [
  {
    invalid: inputNotFilled(email),
    code: StatusCode.BAD_REQUEST,
    message: ErrorMessage.BAD_REQUEST,
  },
  {
    invalid: invalidEmail(email),
    code: StatusCode.UNAUTHORIZED,
    message: ErrorMessage.UNAUTHORIZED,
  },
];

export default emailSchema;
