import { Pipe, PipeTransform } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[],args: string,arg : boolean): string[] {
    if(arg === false){
      if(args === 'rank'){
        return value.sort((a: any, b: any) => {
          return a.rank < b.rank ? -1 : (a.rank > b.rank ? 1 : 0);
        });
      }
      else if (args === 'name') {
        return value.sort((a: any, b: any) => {
          return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
        });
      }
      else if (args === 'followers') {
        return value.sort((a: any, b: any) => {
          return a.followers < b.followers ? -1 : (a.followers > b.followers ? 1 : 0);
        });
      }
    }
    else if(arg === true){
      if(args==='rank'){
      return value.sort((a: any, b: any)=>{
        return a.rank> b.rank ? -1 : (a.rank < b.rank ? 1 : 0);
      });
    }
    else if (args === 'name') {
      return value.sort((a: any, b: any) => {
        return a.name > b.name ? -1 : (a.name < b.name ? 1 : 0);
      });
    }
    else if (args === 'followers') {
      return value.sort((a: any, b: any) => {
        return a.followers > b.followers ? -1 : (a.followers < b.followers ? 1 : 0);
      });
    }
    }
    
  }

}
