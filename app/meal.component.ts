import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div class="meal-display">
    <strong><div class="color-display">{{meal.name}}</div></strong>
    "{{meal.details}}"
    <div class="color-display meal-filter">{{meal.calories}} calories</div>
  </div>
  `
})

export class MealComponent{
  public meal: Meal;
}
