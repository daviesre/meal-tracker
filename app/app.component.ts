// import Component code from angulary library
import { Component } from 'angular2/core';
import {Meal} from './meal.model';

// annotation
@Component({
  selector: 'my-app',
  template: `
    <div class = "container">
      <h1>Meal Tracker!</h1>
    </div>
  `
})
// class declaration
export class AppComponent {
  public meals: Meal[];

  constructor(){
    this.meals = [
      new Meal("Mac & Cheese", "Yummy but sinful", 310),
      new Meal("Carrots", "What you should always eat!", 25)
    ];
  }
}
