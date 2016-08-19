import {Component} from 'angular2/core';
import {HomeComponent} from './home/home.component';
import {TeachersComponent} from './teachers/teachers.component';
import {StudentComponent} from './students/student.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
@Component({
    selector: 'my-app',
    templateUrl: 'app/appcomponent.html',
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/",name: "root",redirectTo: ["/Home"] },
    {path:'/home',name:'Home',component:HomeComponent},
    {path:'/teachers',name:'TeacherList',component:TeachersComponent},
    {path:'/students',name:'StudentDetails',component:StudentComponent}
])
export class AppComponent { }