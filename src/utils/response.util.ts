/**
 * Success Response
 * @param statusCode HTTP status code
 * @param message Response message
 * @param data Response data (optional)
 * @returns Standardized success response
 */
export function SuccessResponse<T>(
  statusCode: number,
  message: string,
  data: T | null = null,
) {
  return {
    statusCode,
    success: true,
    message,
    data,
  };
}

/**
 * Error Response
 * @param statusCode HTTP status code
 * @param message Error message
 * @returns Standardized error response
 */

export function ErrorResponse(statusCode: number, message: string) {
  return {
    statusCode,
    success: false,
    message,
  };
}
