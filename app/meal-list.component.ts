import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import {MealComponent} from './meal.component';
import {EditMealDetailsComponent} from './meal-edit-details.component';
import {AddMealComponent} from './meal-add.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, EditMealDetailsComponent, AddMealComponent],
  template: `
  <meal-display *ngFor="#meal of mealList" [meal]="meal" (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal"></meal-display>
  <meal-edit-details *ngIf="selectedMeal" [meal]="selectedMeal"></meal-edit-details>
  <meal-add (onSubmitNewMeal)="createMeal($event)"></meal-add>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
    this.selectedMeal = clickedMeal;
  }
  createMeal(meal): void {
    this.mealList.push(
      new Meal (meal.userName, meal.userCalories, meal.userDetails)
    );
  }
}
