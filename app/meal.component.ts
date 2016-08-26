import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div class="container meal-display">
    <strong>{{meal.name}}</strong>,
    "{{meal.details}}",
    {{meal.calories}} calories
  </div>

  `
})

export class MealComponent{
  public meal: Meal;
}
