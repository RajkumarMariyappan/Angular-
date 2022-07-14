import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error: HttpErrorResponse) {
        alert('An unexcepted error occured..');
      console.log(error);

    }
}