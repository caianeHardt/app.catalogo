import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthenticationInterceptor } from './helpers/authentication.interceptor';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, HttpClientModule],
  exports: [BrowserAnimationsModule, HttpClientModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthenticationInterceptor,
          multi: true,
        },
      ],
    };
  }
}
