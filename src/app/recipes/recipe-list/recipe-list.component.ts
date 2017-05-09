import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
    new Recipe('Harry','Awesome man','https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/12803080_1210179802333398_6841833876461238181_n.jpg?oh=fe889b6f3dfbf28c480f4d93982e2322&oe=59887F8B'),
    new Recipe('Yi Fan Li','Research','https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/13615161_1220030041349032_5662184836216040595_n.jpg?oh=1fb022dea604a3b63850f5b93356d683&oe=59B2A006')
  ];

@Output() recipeChose = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSeleted(recipe:Recipe){
    this.recipeChose.emit(recipe);
  }

}
