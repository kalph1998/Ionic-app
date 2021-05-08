import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Samosa',
      imageUrl: '/assets/images/samosa.jpg',
      ingredients: ['potato', 'flour', 'oil']
    },
    {
      id: 'r2',
      title: 'Samosa',
      imageUrl: '/assets/images/samosa.jpg',
      ingredients: ['potato', 'flour', 'oil']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => recipeId = recipe.id)
    };
  }


}
