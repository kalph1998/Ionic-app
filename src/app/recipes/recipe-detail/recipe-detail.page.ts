import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {


  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {

        return;
      }
      const recipeID = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeID);

    });
  }

}
