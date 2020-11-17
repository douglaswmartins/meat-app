
import { Observable, throwError as observableThrowError} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {

  static handleError(error: HttpErrorResponse | any): Observable<never> {
    
    let errorMessage: string

    if (error instanceof Response) {
      const body = error.json() || ''
      const err = body['error'] || JSON.stringify(body)
      errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${err}`
    } else {
      errorMessage = error.message ? error.message : error.toString()
    }

    return observableThrowError(errorMessage)
  }

}
