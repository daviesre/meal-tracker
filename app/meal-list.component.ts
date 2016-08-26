import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
  <h1>Test</h1>
  `
})

export class MealListComponent {
  public mealList: Meal[];
}
