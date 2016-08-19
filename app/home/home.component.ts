import {Component} from 'angular2/core';
import {LearningComponent} from './learningcenter/learning.component';
import {FeaturesComponent} from './features/features.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from './contactus/contactus.component';
import {HTTPService} from '../Services/http.service';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    directives:[LearningComponent,FeaturesComponent,AboutusComponent,ContactusComponent],
     providers:[HTTPService]
})
export class HomeComponent { 
  getData:string;
  getPromiseData:string;
  postData:string;

  constructor(private _httpService:HTTPService){}

  onGet(){
    console.log('Getting user now.');
    this._httpService.getUser().subscribe(
      data =>this.getData = JSON.stringify(data),
      error=>alert(error),
      ()=>console.log(this.getData)
    );
  }

  onPromiseGet(){
    console.log('Getting user based on promise now.');
    this._httpService.getUsersByPromise()
      .then(
        res=>this.getPromiseData = JSON.stringify(res),
        err=>alert(err)
    );

  }

  onPost(){
    this._httpService.postJson().subscribe(
      data =>this.postData = JSON.stringify(data),
      error=>alert(error),
      ()=>console.log('Finished Post')
    );
  }

}