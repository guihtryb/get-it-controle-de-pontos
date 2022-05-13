enum StatusCode {
  SUCCESSFULLY_REQUEST = 200,
  SUCCESSFULLY_CREATED,
  BAD_REQUEST = 400,
  UNAUTHORIZED,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNEXPECTED_ERROR,
}

export default StatusCode;
