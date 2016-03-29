import {Component} from 'angular2/core';
import {ReferenceService} from '../../../shared/services/reference.service';
import {Reference} from '../../model/reference';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
@Component({
    selector: 'ref-table',
    templateUrl: 'app/components/references/ref-table.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ReferenceTable {
    references: Reference[];

    constructor(private __referenceService: ReferenceService, _router: Router) { }

    ngOnInit() {
        this.__referenceService.getReferences().then(references => this.references = references);
    }
}
