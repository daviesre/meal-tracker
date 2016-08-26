import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import {MealComponent} from './meal.component';
import {EditMealDetailsComponent} from './meal-edit-details.component';
import {AddMealComponent} from './meal-add.component';
import {CaloriesPipe} from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, EditMealDetailsComponent, AddMealComponent],
  template: `
  <label>Filter Meals
  <select (change="onChange($event.target.value)" class="filter")>
    <option selected value="all">Show All Meals</option>
    <option value="500">Show High Calorie Meals<option>
    <option value="499">Show Low Calorie Meals</option>
  </label>
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
  onChange(optionFromMenu) {
    this.selectedMeal = optionFromMenu;
  }
}
