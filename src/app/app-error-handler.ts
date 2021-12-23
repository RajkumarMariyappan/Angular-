import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error: any) {
        alert('An unexcepted error1 occured..');
      console.log(error);

    }
}