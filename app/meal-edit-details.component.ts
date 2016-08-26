import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'meal-edit-details',
  inputs: ['meal'],
  template:`
    <h3>Edit Meal Plan:</h3>
    <input [(ngModel)]="meal.name">
    <input [(ngModel)]="meal.calories">
    <input [(ngModel)]="meal.details">
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
