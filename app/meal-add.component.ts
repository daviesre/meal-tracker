import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'meal-add',
  outputs: ['onSubmitNewMeal'],
  template:`
    <h3>Add a new meal:</h3>
    <input placeholder="Name" #newName>
    <input placeholder="Calories" #newCalories>
    <input placeholder="Details" #newDetails>
    <button (click) = "addMeal(newName, newCalories, newDetails)" class="btn btn-success">Add</button>
  `
})

export class AddMealComponent {
  public onSubmitNewMeal: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userCalories: HTMLInputElement, userDetails: HTMLInputElement){
    this.onSubmitNewMeal.emit({userName: userName.value, userCalories: userCalories.value, userDetails: userDetails.value});
    userName.value = "";
    userCalories.value = "";
    userDetails.value = "";
  }
}
