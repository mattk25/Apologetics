import {Component, OnInit, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {ReferenceTable} from '../references/ref-table.component';
import {Topic} from '../../model/topic';
import {ReferenceService} from '../../../shared/services/reference.service';
import {SearchPipe} from './dashboard-search.filter';
import {DashboardSearchComponent } from './dashboard-search.component';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    directives: [ReferenceTable, Dragula, DashboardSearchComponent],
    pipes: [SearchPipe],
    styleUrls: ['app/components/dashboard/dashboard.component.css'],
	viewProviders: [DragulaService]
})
export class DashboardComponent implements OnInit {

    @Input() term;

    topics: Topic[];
    currentTopic : number = 1;

    constructor(private _router: Router, private _refService: ReferenceService) { }

    ngOnInit() {
       this._refService.getTopics().then(tops => this.topics = tops);
    }

    gotoTopicDetail(topic) {
        console.log('CLICKED FOOL');
        this._router.navigate(['Topic', {id: topic.id}]);
    }

    createNewTopic() {
        this._router.navigate(['NewTopic']);
    }
}
