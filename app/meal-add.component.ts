import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'meal-add',
  outputs: ['onSubmitNewMeal'],
  template:`
    <div class="meal-add">
      <h3>Add a new meal:</h3>
      <input placeholder="Name" #newName>
      <input placeholder="Details" #newDetails>
      <input placeholder="Calories" #newCalories>
      <button (click) = "addMeal(newName, newCalories, newDetails)" class="btn btn-lg btn-info">Add</button>
    </div>
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
