import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import {MealComponent} from './meal.component';
import {EditMealDetailsComponent} from './meal-edit-details.component';
import {AddMealComponent} from './meal-add.component';
import {CaloriesPipe} from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes:[CaloriesPipe],
  directives: [MealComponent, EditMealDetailsComponent, AddMealComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All Meals</option>
    <option value="isHighCalories">Show High Calorie Meals</option>
    <option value="notHighCalories">Show Low Calorie Meals</option>
  </select>
  <meal-display *ngFor="#meal of mealList | caloriesFilter:selectedCalories" [meal]="meal" (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal"></meal-display>
  <meal-edit-details *ngIf="selectedMeal" [meal]="selectedMeal"></meal-edit-details>
  <meal-add (onSubmitNewMeal)="createMeal($event)"></meal-add>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public selectedCalories: string = "all";
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
  createMeal(meal): void {
    this.mealList.push(
      new Meal (meal.userName, meal.userCalories, meal.userDetails)
    );
  }
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }
}
