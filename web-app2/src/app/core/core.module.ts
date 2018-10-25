import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from '../../../../../../common/interceptors/http.token.interceptor';

import { ApiService, AuthGuard, JwtService, UserService } from '../../../../common/services';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    AuthGuard,
    JwtService,
    UserService,
  ],
  declarations: [],
})
export class CoreModule {}
