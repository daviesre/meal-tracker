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
      if(desiredMeal > 499)
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories === 0) {
            output.push(input[i]);
          }
      } else if(desiredMeal < 499)
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories === 0) {
            output.push(input[i]);
          }
      }  else {
        return input;
      }
      return output;
  }




}