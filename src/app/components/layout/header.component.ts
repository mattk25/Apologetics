import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
@Component({
    selector: 'app-header',
    templateUrl: 'app/components/layout/header.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    title: String = 'Apologia - Make Your Case';
    constructor(private _router: Router) { }

}
