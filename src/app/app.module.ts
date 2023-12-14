import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {AuthModule} from "./auth/auth.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {TopBarModule} from "./shared/modules/top-bar/top-bar.module";
import {PersistanceService} from "./shared/services/persistance.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./shared/services/auth-interceptor.service";
import {GlobalFeedModule} from "./global-feed/global-feed.module";
import {YourFeedModule} from "./your-feed/your-feed.module";
import {TagFeedModule} from "./tag-feed/tag-feed.module";
import {ArticleModule} from "./article/article.module";
import {CreateArticleModule} from "./create-article/create-article.module";
import {EditArticleModule} from "./edit-article/edit-article.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticleModule,
    CreateArticleModule,
    EditArticleModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
