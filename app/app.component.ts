// import Component code from angulary library
import { Component } from 'angular2/core';
import {Meal} from './meal.model';
import {MealListComponent} from './meal-list.component';

// annotation
@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class = "container-fluid header">
      <h1>Meal Tracker!</h1>
      <h4>record your meals for today here:</h4>
    </div>
    <div class="meal-list">
    <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})
// class declaration
export class AppComponent {
  public meals: Meal[];

  constructor(){
    this.meals = [
      new Meal("Mac & Cheese", "Yummy but sinful", 310),
      new Meal("Carrots", "What you should always eat!", 25),
      new Meal("Fettuccine Alfredo", "Really bad for you...", 800),
      new Meal("Sushi", "Not a bad way to go for a meal", 304),
      new Meal("Bag of Candy", "You always tell yourself just one more.", 600)
    ];
  }
}
