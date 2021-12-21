import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
