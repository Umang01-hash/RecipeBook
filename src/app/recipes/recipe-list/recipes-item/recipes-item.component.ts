import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe!: Recipe;
  @Output() recepieSelected=new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recepieSelected.emit(this.recipe);
  }

}
