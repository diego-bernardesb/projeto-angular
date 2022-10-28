import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'escritorio' :
        return 'desktop_windows';
      case 'eletronicos' :
        return 'smartphone';
      case 'artigos-domesticos' :
        return 'house';
      case 'material-escolar' :
        return 'school';
      case 'games' :
        return 'sports_esports';
      default: 
        return 'horizontal_rule';
    }
  }
}
