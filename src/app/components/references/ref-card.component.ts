import {Component, Input } from 'angular2/core';
import {ReferenceService} from '../../../shared/services/reference.service';
import {Reference} from '../../model/reference';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'ref-card',
    templateUrl: 'app/components/references/ref-card.component.html',
    directives: [ROUTER_DIRECTIVES, Dragula],
    viewProviders: [DragulaService],
    styleUrls: ['app/components/references/ref-card.component.css']
})
export class ReferenceCard {
    @Input() reference: Reference;
    isFlipped = false;
    typeStyles = {'bg-warning': false, 'bg-success': false};

    constructor(private __referenceService: ReferenceService, _router: Router) { }

    toggleFlip(newState) {
       this.isFlipped = newState;
    }

    ngOnInit() {
        if(this.reference.type === 'Quote') {
            this.typeStyles['bg-success'] = true;
        }
    }
}
