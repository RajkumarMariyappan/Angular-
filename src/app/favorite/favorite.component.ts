import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
export interface favoriteChanged{
  newvalue:boolean;
}
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
@Input('isfavorite') isSelected: boolean |undefined;
@Output('change') click  =new EventEmitter;
  constructor() { 
    
  }

  ngOnInit() {
   
  }
  onclick(){
    this.isSelected=!this.isSelected;
    this.click
    .emit({newvalue : this.isSelected});
  }

}
