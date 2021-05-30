import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  isFavourite = false;
  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
    private route: Router, private recipeService: RecipeService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeID = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeID);
    });
  }

  addToFav() {
    if (this.isFavourite) {
      this.alertCtrl.create({
        header: 'Remove from favourite?', buttons: [
          {
            text: 'No',
            role: 'cancel'
          },
          {
            text: 'Yes',
            handler: () => {
              this.isFavourite = false;
            }
          }
        ]
      }).then(alertEl => {
        alertEl.present();
      });
    } else {
      this.alertCtrl.create({
        header: 'Add this to favourite?', buttons: [
          {
            text: 'No',
            role: 'cancel'
          },
          {
            text: 'Yes',
            handler: () => {
              this.isFavourite = true;
            }
          }
        ]
      }).then(alertEl => {
        alertEl.present();
      });
    }

  }

}
