import { Pipe, PipeTransform } from '@angular/core';
import { Hits } from '../photo/hits';


@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {
    //Primeiro parâmetro e sempre quem você quer aplicar a transformação
    transform(hits: Hits[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if (descriptionQuery) {
            return hits.filter(
                hits => hits.tags.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return hits;
        }
    }
}