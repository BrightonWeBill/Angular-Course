import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[]  = [
    new Recipe ('Test', 'This is a test', 'http://www.seriouseats.com/images/2016/12/20161201-crispy-roast-potatoes-28.jpg'),
    new Recipe ('Test2', 'This is a test', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps8513_FM153592D03_24_3b.jpg'),
    new Recipe ('Test3', 'This is a test', 'https://www.tgifridays.com/content/dam/www/bb/dist/img/mac_cheese_burger.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
