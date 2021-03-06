import { Recipe } from './../../recipe.model';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
    @Output() selectedRecipe= new EventEmitter<Recipe>();
    @Output() recipeSeleted= new EventEmitter<void>();

  constructor() { 

  }

  ngOnInit() {
  }

    onSelected(recipe: Recipe) {
    // this.selectedRecipe.emit(recipe);
    this.recipeSeleted.emit();
  }
}
