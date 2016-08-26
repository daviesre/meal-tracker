import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import {MealComponent} from './meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent],
  template: `
  <meal-display *ngFor="#meal of mealList" [meal]="meal"></meal-display>
  `
})

export class MealListComponent {
  public mealList: Meal[];
}
