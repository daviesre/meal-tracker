import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import {MealComponent} from './meal.component';
import {EditMealDetailsComponent} from './meal-edit-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, EditMealDetailsComponent],
  template: `
  <meal-display *ngFor="#meal of mealList" [meal]="meal" (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal"></meal-display>
  <meal-edit-details *ngIf="selectedMeal" [meal]="selectedMeal"></meal-edit-details>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
    this.selectedMeal = clickedMeal;
  }
}
