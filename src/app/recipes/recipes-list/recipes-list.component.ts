import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recpieWasSelected=new EventEmitter<Recipe>();

  recipes: Recipe[] =[
    new Recipe('A Test Recipe','This is simply a test',
    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=615&q=80')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recpieWasSelected.emit(recipe);
  }

}
