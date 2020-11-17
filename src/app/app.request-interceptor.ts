import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorHandler } from './app.error-handler';

@Injectable()
export class RequestInterceptor implements RequestInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request) {
      return next.handle(request)
        .pipe(catchError(ErrorHandler.handleError));
    }

    return throwError('Erro na Requisição!');
  }
  
}