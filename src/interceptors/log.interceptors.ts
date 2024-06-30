import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    const req = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(() => {
        console.log(`${Date.now() - now}ms`);
        console.log(req.url);
        console.log(req.method);
      }),
    );
  }
}
