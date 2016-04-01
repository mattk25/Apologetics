import {Component, Input, Output, EventEmitter } from 'angular2/core';
import {ReferenceService} from '../../../shared/services/reference.service';
import {Reference} from '../../model/reference';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
import {TopicComponent} from '../topics/topic-main.component';
import {EmitterService} from '../../../shared/services/EmitterService';

@Component({
    selector: 'ref-card',
    templateUrl: 'app/components/references/ref-card.component.html',
    directives: [ROUTER_DIRECTIVES, Dragula],
    viewProviders: [DragulaService],
    styleUrls: ['app/components/references/ref-card.component.css']
})
export class ReferenceCard {
    @Input() reference: Reference;
	@Input() editMode: string;
	@Output() startEdits = new EventEmitter();
    isFlipped = false;
    typeStyles = {'bg-warning': false, 'bg-success': false};


	isVisible: boolean = true;
	@Input() activeCard: boolean;

    constructor(private __referenceService: ReferenceService, private _router: Router) {
		console.log(this.editMode);
	 }

    toggleFlip(newState) {
       this.isFlipped = newState;
    }

	dropped(event: any) {
		event.preventDefault();
		event.stopPropagation();
		console.log(event);
	}

	editRef() {
		this._router.navigate(['EditRef', {topicId: 1 , refId: this.reference.id}]);
    }
		//this.activeCard = true;
		//this.startEdits.emit(this.reference);



    ngOnInit() {
        console.log(this.editMode);
		if(this.reference.type === 'Quote') {
            this.typeStyles['bg-success'] = true;
        }


	EmitterService.get("exitEditMode").subscribe(data => this.activeCard=false);
    }
}
