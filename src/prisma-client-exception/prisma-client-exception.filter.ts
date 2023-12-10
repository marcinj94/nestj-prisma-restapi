import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Response } from 'express';

// Prisma throws the PrismaClientKnownRequestError for many different kinds of errors.
// So you will need to figure out how to extract the error code from the PrismaClientKnownRequestError exception.
// The PrismaClientKnownRequestError exception has a code property that contains the error code.
// You can find the list of error codes in the Prisma Error Message reference.
// https://www.prisma.io/docs/reference/api-reference/error-reference#prisma-client-query-engine

// The error code you are looking for is P2002, which occurs for unique constraint violations.
// You will now update the catch method to throw an HTTP 409 Conflict response in case of this error.
// You will also provide a custom error message to the user.

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    // eslint-disable-next-line no-console
    console.error(exception.message);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    // ! important !
    // I recommend extending the exception filter implementation to handle other errors as well.
    // For example, you can add a case to handle the P2025 error code, which occurs when a record is not found in the database.
    // You should return the status code HttpStatus.NOT_FOUND for this error.
    // This would be useful for the PATCH /articles/:id and DELETE /articles/:id endpoints.

    switch (exception.code) {
      case 'P2002': {
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          statusCode: status,
          message,
        });
        break;
      }
      default: {
        // default 500 err code
        super.catch(exception, host);
      }
    }
  }
}
