import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe ({
  name: 'caloriesFilter',
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], info) {
      var desiredMeal = info[0];
      var output: Meal[] = [];
      if(desiredMeal === "isHighCalories")
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories > 499) {
            output.push(input[i]);
          }
      } else if(desiredMeal === "notHighCalories")
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories < 500) {
            output.push(input[i]);
          }
      }  else {
        return input;
      }
      return output;
  }
}
