System.register(['angular2/core', './learningcenter/learning.component', './features/features.component', './aboutus/aboutus.component', './contactus/contactus.component', '../Services/http.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, learning_component_1, features_component_1, aboutus_component_1, contactus_component_1, http_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (learning_component_1_1) {
                learning_component_1 = learning_component_1_1;
            },
            function (features_component_1_1) {
                features_component_1 = features_component_1_1;
            },
            function (aboutus_component_1_1) {
                aboutus_component_1 = aboutus_component_1_1;
            },
            function (contactus_component_1_1) {
                contactus_component_1 = contactus_component_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HomeComponent.prototype.onGet = function () {
                    var _this = this;
                    console.log('Getting user now.');
                    this._httpService.getUser().subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log(_this.getData); });
                };
                HomeComponent.prototype.onPromiseGet = function () {
                    var _this = this;
                    console.log('Getting user based on promise now.');
                    this._httpService.getUsersByPromise()
                        .then(function (res) { return _this.getPromiseData = JSON.stringify(res); }, function (err) { return alert(err); });
                };
                HomeComponent.prototype.onPost = function () {
                    var _this = this;
                    this._httpService.postJson().subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Finished Post'); });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/home/home.html',
                        directives: [learning_component_1.LearningComponent, features_component_1.FeaturesComponent, aboutus_component_1.AboutusComponent, contactus_component_1.ContactusComponent],
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map