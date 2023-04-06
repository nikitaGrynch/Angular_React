import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustompipe'
})
export class MycustompipePipe implements PipeTransform {

  transform(value: string) : string{
    let i = 0;
    let res = "";
    for(let sym of value){
      if (i % 2 == 0){
        res += sym.toLowerCase();
      }
      else{
        res += sym.toUpperCase();
      }
      i++;
    }
    return res;
  }

}
