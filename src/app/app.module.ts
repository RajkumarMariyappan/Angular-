import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { EmailService } from './email.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavoriteComponent,
    DirectiveComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
