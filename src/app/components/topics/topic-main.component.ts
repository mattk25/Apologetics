import {Component, OnInit, Input, EventEmitter, Output } from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Topic} from '../../model/Topic';
import {Reference} from '../../model/reference';
import {ReferenceService} from '../../../shared/services/reference.service';
import {ReferenceCard} from '../references/ref-card.component';
import {ReferenceSearchComponent} from '../references/ref-search.component';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
import {EmitterService} from '../../../shared/services/EmitterService';
@Component({
  selector: 'topic',
  templateUrl: 'app/components/topics/topic-main.component.html',
  directives: [ReferenceSearchComponent, Dragula, ReferenceCard],
  viewProviders: [DragulaService]
})
export class TopicComponent implements OnInit  {
    @Input() topicId: number;
    public topic : Topic;

	layoutStyles = {'col-xs-12': true, 'col-md-3': true};
	editModeEnabled: boolean;
	cardState: boolean = false;
    constructor(private _refService: ReferenceService, private params: RouteParams, private dragulaService: DragulaService) {
		dragulaService.setOptions('first-bag', {
			revertOnSpill: true
		});

		dragulaService.dropModel.subscribe((value) => {
			this.onDropModel(value.slice(1));
 		});

		this.editModeEnabled = false;

     }

    ngOnInit() {

		let id = +this.params.get('id');
		this.topic = this._refService.getTopicById(id);
		this.topic.references.sort(function(a, b) {
				if(a.ranking < b.ranking)
					return -1;
				if(a.ranking > b.ranking)
					return 1;
				return 0
			});

			console.log("initializing references");
			console.log(this.topic.references);



	    }

	private onDropModel(value) {
		this.reRankReferences();
		console.log(this.topic.references);
	}

	getEditMode() {
		console.log("i made it here");
	}
	changeEditMode(event) {
		console.log("event fired.");
		console.log(event);
		this.editModeEnabled = true;
		this.layoutStyles['col-md-3'] = false;
	}

	disableEditMode() {
		this.editModeEnabled = false;
		this.layoutStyles['col-md-3'] = true;
		EmitterService.get("exitEditMode").emit('you scrolled!');
	}
	private reRankReferences() {
		var size = this.topic.references.length;
		for(var i = 0; i < size; i++) {
			var ref = this.topic.references[i];
			ref.ranking = i+1;
		}
	}


}
