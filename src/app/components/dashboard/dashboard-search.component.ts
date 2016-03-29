import {Component, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'dashboard-search',
    templateUrl: 'app/components/dashboard/dashboard-search.component.html',
    styleUrls: ['app/components/dashboard/dashboard-search.component.css']
})
export class DashboardSearchComponent {
   @Output() update = new EventEmitter();

   ngOnInit() {
       this.update.emit('');
   }
}
