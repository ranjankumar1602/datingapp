import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
    const today = new Date();
    const dob = new Date(value);
    // console.log(today)
    // console.log(dob)
    // console.log(value)
    // console.log('Raw value:', value);
    // console.log('Type:', typeof value);


    let age = today.getFullYear() - dob.getFullYear();
    // console.log(age)
    const monthDiff = today.getMonth() - dob.getMonth();

    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }

}
