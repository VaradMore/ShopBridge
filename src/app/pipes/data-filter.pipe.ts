import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any[] {
    if (!items || !filter) {
      return items;
    }
    // To search in values of every variable of your object(item)
    return items.filter(item => {
      // remove property names and GUIDs
      let str = JSON.stringify(item).replace(/("[^"]+"\s*:)|([a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})/g, '');
      return str.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    });
  }

}
