import { ErrorHandler, NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { EmailService } from './email.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { DirectiveComponent } from './directive/directive.component';
import { InputCustomdirectiveDirective } from './input-customdirective.directive';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { PostComponent } from './post/post.component';
import { PostchangeService } from './postchange.service';
import { AppErrorHandler } from './app-error-handler';



@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavoriteComponent,
    DirectiveComponent,
    InputCustomdirectiveDirective,
    TemplateFormsComponent,
    RegistrationComponent,
    ReactiveComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [EmailService,PostchangeService,{provide: ErrorHandler,useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
