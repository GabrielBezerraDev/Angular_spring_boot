import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

    req = req.clone({
      setHeaders: {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*",
      }
    });

    return next(req);
};
