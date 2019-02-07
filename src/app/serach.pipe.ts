import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serach'
})
export class SerachPipe implements PipeTransform {

  transform(item: any, search_text: string): any {
    if (!item) return[];
    if (!search_text) return[item];

    search_text = search_text.toLowerCase();

    return item.filter(user =>
      {
          return user.username.toLowerCase().includes(search_text);
      });
  }

}
