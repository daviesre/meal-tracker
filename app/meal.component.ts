import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    {{meal.name}}
    {{meal.calories}}
    {{meal.details}}
  </div>

  `
})

export class MealComponent{
  public meal: Meal;
}
