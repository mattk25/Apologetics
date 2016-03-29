import {Pipe} from 'angular2/core';
@Pipe({
    name: 'search'
})
export class SearchPipe  {
    transform(value, [term]) {
        if( value == null) return null;

        if(term === '') {
            return value;
        } else {
            return value.filter(topic=> { return topic.name.toLowerCase().search(term) >  -1;});
        }
    }
}
