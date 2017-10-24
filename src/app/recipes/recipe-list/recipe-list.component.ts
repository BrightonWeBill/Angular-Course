import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [
    new Recipe ('Test', 'This is a test', 'http://www.seriouseats.com/images/2016/12/20161201-crispy-roast-potatoes-28.jpg'),
    new Recipe ('Test', 'This is a test', 'http://www.seriouseats.com/images/2016/12/20161201-crispy-roast-potatoes-28.jpg'),
    new Recipe ('Test', 'This is a test', 'http://www.seriouseats.com/images/2016/12/20161201-crispy-roast-potatoes-28.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
