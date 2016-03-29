import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ReferenceService} from '../../../shared/services/reference.service';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AboutComponent} from '../about/AboutComponent';
import {HeaderComponent} from '../layout/header.component';
import {TopicComponent} from '../topics/topic-main.component';
import {TopicFormComponent} from '../topics/topic-form.component';
@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/about', name: 'About', component: AboutComponent},
    {path: '/topic/:id', name: 'Topic', component: TopicComponent},
    {path: '/topic', name: 'NewTopic', component: TopicFormComponent},
])
@Component({
    selector: 'sd-app',
    templateUrl: 'app/components/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, HeaderComponent],
    providers: [ReferenceService],
    styleUrls: ['app/components/app/app.component.css']
})

export class AppComponent {
    title: string = 'Apologia';
    subtitle: string = 'Make your case!!!';
}
