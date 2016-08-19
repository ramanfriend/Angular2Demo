System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2;
    var HTTPService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            HTTPService = (function () {
                function HTTPService(_http) {
                    this._http = _http;
                }
                HTTPService.prototype.getHttp = function () {
                    return this._http.get("http://jsonplaceholder.typicode.com/users/1")
                        .map(function (res) { return res.json(); });
                };
                ;
                HTTPService.prototype.postHttp = function () {
                    var json = JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1
                    });
                    var params = 'data=' + json;
                    var header = new http_2.Headers();
                    header.append('Content-type', 'application/x-www-form-urlencoded');
                    return this._http.post("http://jsonplaceholder.typicode.com/posts", params, {
                        headers: header
                    })
                        .map(function (res) { return res.json(); });
                };
                ;
                HTTPService.prototype.getUsersByPromise = function () {
                    return this._http.get("http://jsonplaceholder.typicode.com/users")
                        .toPromise()
                        .then(function (res) { return res.json(); });
                };
                HTTPService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPService);
                return HTTPService;
            }());
            exports_1("HTTPService", HTTPService);
        }
    }
});
//# sourceMappingURL=http.service.js.map