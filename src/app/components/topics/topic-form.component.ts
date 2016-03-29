import {Component} from 'angular2/core';
import {Topic} from '../../model/Topic';
import {ReferenceService} from '../../../shared/services/reference.service';
import {Router} from 'angular2/router';
@Component({
  selector: 'topic-form',
  templateUrl: 'app/components/topics/topic-form.component.html',
  styleUrls: ['app/components/topics/topic-form.component.css']
})
export class TopicFormComponent   {
    topic : Topic = new Topic();
    constructor(private _refService: ReferenceService, private _router: Router) { }

    createNewTopic() {
        this._refService.createNewTopic(this.topic);
        this._router.navigate(['Dashboard']);
    }
}
