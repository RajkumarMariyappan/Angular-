import { Component } from '@angular/core';
import { favoriteChanged } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Myfirstapp';
  post={
    title:"rajkumar",
    isfavorite : true
  }

  onfavorite(eventArgs : favoriteChanged){
    console.log('favorite changed',eventArgs);
  }
}
