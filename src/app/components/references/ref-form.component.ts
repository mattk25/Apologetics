import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { ReferenceService } from '../../../shared/services/reference.service';
import { Reference } from '../../model/reference';
@Component({
  selector: 'ref-form',
  templateUrl: 'app/components/references/ref-form.component.html',
  styleUrls: ['app/components/references/ref-form.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ReferenceFormComponent {

	reference: Reference;
	refId: number;

	constructor(private _router: Router, private _routeParams: RouteParams, private _refService: ReferenceService) {

	}

	ngOnInit() {
		this.refId = +this._routeParams.get('refId');
		this.reference = this._refService.getReference(this.refId)
	}
}
