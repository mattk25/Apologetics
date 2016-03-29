import {Component, OnInit, Input } from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Topic} from '../../model/Topic';
import {Reference} from '../../model/reference';
import {ReferenceService} from '../../../shared/services/reference.service';
import {ReferenceCard} from '../references/ref-card.component';
import {ReferenceSearchComponent} from '../references/ref-search.component';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
@Component({
  selector: 'topic',
  templateUrl: 'app/components/topics/topic-main.component.html',
  directives: [ReferenceSearchComponent, Dragula, ReferenceCard],
  viewProviders: [DragulaService]
})
export class TopicComponent implements OnInit  {
    @Input() topicId: number;
    public topic : Topic;
    references: Reference[];
    public ref: Reference;
    constructor(private _refService: ReferenceService, private params: RouteParams, private dragulaService: DragulaService) {
		dragulaService.setOptions('first-bag', {
			revertOnSpill: true
		});
     }

    ngOnInit() {
       let id = +this.params.get('id');
       this.topic = this._refService.getTopicById(id);
    }


}
