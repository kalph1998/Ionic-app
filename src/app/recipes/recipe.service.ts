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
      ingredients: ['potato', 'flour', 'oil'],
      description: 'With Potato',
      price: 20,
      rating: 4.2
    },
    {
      id: 'r2',
      title: 'Pav Bhaji',
      imageUrl: '/assets/images/Pav-Bhaji.jpg',
      ingredients: ['pav', 'vegetables', 'oil'],
      description: 'With spicy bhaji',
      price: 40,
      rating: 4.5
    },
    {
      id: 'r3',
      title: 'Dal tadka',
      imageUrl: '/assets/images/Dal-tadka.jpg',
      ingredients: ['Dal', 'butter', 'red chilly'],
      description: 'with tangy taste',
      price: 30,
      rating: 4.3
    },
    {
      id: 'r4',
      title: 'Dosa',
      imageUrl: '/assets/images/dosa.jpg',
      ingredients: ['Dosa', 'sambhar', 'spices'],
      description: 'Taste of South',
      price: 40,
      rating: 4.1
    },

  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => recipeId === recipe.id)
    };
  }


}
